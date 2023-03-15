import React from 'react'
import './Posts.css'
// import Kratos from '../../assets/kratos.jpg'
// import GoW from '../../assets/GoW.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
function Posts() {
 
  
  return (
    <div className='Post'>
    <div className="post_header">
    <img src="https://yt3.ggpht.com/yti/AHXOFjVHVX_kjSaYusVMA1nrtddJ5R2nvBe7wIidMJ8n=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
    <p>Anonymous</p>
    </div>
  <div className="post_content">
  <img src='https://res.cloudinary.com/cantacloud2/image/upload/v1675847116/k83p8j7dud4jlgzeaijg.png' alt="" />
  </div>
  <div className="post_footer">
  <div className="post_actions">
  <div className='post_like'>
  <FavoriteBorderIcon className='like'/>
  <p>1 like</p>
  </div>
  </div>
  <div className="post_caption">
  <p>Lorem ipsum dolor sit amet.</p>
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