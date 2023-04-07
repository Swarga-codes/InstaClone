import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import "./PostDetails.css";
import DefaultProfilePic from '../../assets/userdefault.png'
function PostDetails({ items, detailDisp }) {
  const navigate=useNavigate();
  const DeletePost=(posts)=>{
    if(window.confirm('Do you really want to delete this post?')){
    fetch(`http://localhost:5000/delposts/${posts}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+localStorage.getItem('jwt')
      }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }
  }
  return (
    <div className="comment_details">
      <div className="comment_container">
        <div className="comment_pic">
          <img src={items.photo} alt="" />
        </div>
        <div className="comment_display">
          <div className="user_header">
            <img
              src={items.postedBy?.photo?items.postedBy?.photo:DefaultProfilePic}
              alt=""
            />
            <p>{items.postedBy?.userName}</p>
            <div className="delete_post" onClick={()=>{
              DeletePost(items._id);
              navigate('/');
            }}>
            <DeleteIcon/>
            </div>
          </div>
          <div className="comment_section">
            {items?.comments?.map((com) => {
              return (
                <p>
                  <b>{com?.postedBy?.userName}</b>&nbsp; &nbsp;{com.comment}
                </p>
              );
            })}
          </div>
          <div className="likes_caption">
            <p>{items?.likes?.length} likes</p>
            <br />
            <p><b>{items.postedBy.userName}</b>{" "}{items.body}</p>
          </div>

          <div className="add_comment">
            <input
              type="text"
              name="comment"
              id="name"
              placeholder="Enter a comment..."
             
            />
            <button
              onClick={() => {
                // createComment(comment, items._id);
                // clickComment();
              }}
            >
              <SendIcon sx={{ backgroundColor: "#201b1b" }} />
            </button>
          </div>
        </div>
      </div>

      <div className="close_comment" onClick={() => detailDisp()}>
        <CloseIcon />
      </div>
    </div>
  );
}

export default PostDetails;
// onChange={(e) => setComment(e.target.value)}