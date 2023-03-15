import React from 'react'
import Navbar from '../SideNav/Navbar'
import './CreatePosts.css'
function CreatePosts() {
    const loadFile=(e)=>{
        let output=document.getElementById('output');
        output.src=URL.createObjectURL(e.target.files[0]);
        output.onload=()=>{
            URL.revokeObjectURL(output.src);
        };
    }
  return (
    <div className='createPosts'>
    <Navbar/>
    <div className="createPostsCard">
    <div className="createPostsHeader">
    <h1>Create a new post</h1>
    <button>Create</button>
    </div>
    <div className="create">
    <img src='https://img.icons8.com/sf-black-filled/256/image.png' id='output' alt="no preview" />
    <br />
    <input type="file" name="file" id="file" accept='image/*' onChange={(e)=>loadFile(e)}/>
    </div>
    <div className="add_captions">
    <textarea name="" id="" cols="110" rows="5" placeholder='Enter the caption...'></textarea>
    </div>
    </div>
    </div>
  )
}

export default CreatePosts