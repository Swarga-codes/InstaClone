import React,{useState} from 'react'
import './Posts.css'
// import Kratos from '../../assets/kratos.jpg'
// import GoW from '../../assets/GoW.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
function Posts({dat}) {
const[like,setLike]=useState(false);
const clickLike=()=>{
  setLike(!like);
}
  return (
    <div className='Post'>
    <div className="post_header">
    <img src="https://yt3.ggpht.com/yti/AHXOFjVHVX_kjSaYusVMA1nrtddJ5R2nvBe7wIidMJ8n=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
    <p>{dat.postedBy.userName}</p>
    </div>
  <div className="post_content">
  <img src={dat.photo} alt="" />
  </div>
  <div className="post_footer">
  <div className="post_actions">
  <div className='post_like'>
  {like?
    <FavoriteIcon className='unlike' sx={{color:'crimson'}} onClick={clickLike}/>
  :

<FavoriteBorderIcon className='like' onClick={clickLike}/>
  }
  <p>1 like</p>
  </div>
  </div>
  <div className="post_caption">
  <p>{dat.body}</p>
  </div>
  <div className="comment_box">
  <input type="text" name='comment' id='name' placeholder='Enter a comment...'/>
  <button><SendIcon sx={{backgroundColor:'#201b1b'}}/></button>
  </div>
  </div>
    </div>
  )
}

export default Posts