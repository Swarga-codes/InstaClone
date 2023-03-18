import React, { useState, useEffect } from "react";
import Navbar from "../SideNav/Navbar";
import "./CreatePosts.css";
function CreatePosts() {
  const [captions, setCaptions] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (url) {
      fetch("http://localhost:5000/createPosts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          body: captions,
          pics: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  }, [url]);

  const getPostDetails = () => {
    console.log(captions, image);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instagram-clone");
    data.append("cloud_name", "markus0509");
    fetch("https://api.cloudinary.com/v1_1/markus0509/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data.url);
      })
      .catch((err) => console.log(err));
  };
  const loadFile = (e) => {
    let output = document.getElementById("output");
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = () => {
      URL.revokeObjectURL(output.src);
    };
  };
  return (
    <div className="createPosts">
      <Navbar />
      <div className="createPostsCard">
        <div className="createPostsHeader">
          <h1>Create a new post</h1>
          <button onClick={getPostDetails}>Create</button>
        </div>
        <div className="create">
          <img
            src="https://img.icons8.com/sf-black-filled/256/image.png"
            id="output"
            alt="no preview"
          />
          <br />
          <input
            type="file"
            name="file"
            id="file"
            accept="image/*"
            onChange={(e) => {
              loadFile(e);
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="add_captions">
          <textarea
            name=""
            id=""
            cols="110"
            rows="5"
            placeholder="Enter the caption..."
            onChange={(e) => setCaptions(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default CreatePosts;
