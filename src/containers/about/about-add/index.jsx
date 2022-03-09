import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AboutAdd = () => {
  
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img_url, setImgUrl] = useState(undefined);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("file", img_url);
    axios.post('http://localhost:8080/api/about', formData).then((resp) => {
      navigate("/");
      setImgUrl("");
      setTitle("");
      setText("");
    })
    .catch((err) => console.log(err));
  };
  
  return (
    <div className="add-container container mt-5">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 border rounded-3 p-4">
          <form onSubmit={handleSubmit}>
          <h1 className="d-flex align-items-center justify-content-center mt-2">
            Post add
          </h1>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Enter title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Type title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Enter text
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Type title"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Enter title
            </label>
            <input
              type="file"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Type title"
              onChange={(e) => setImgUrl(e.target.files[0])}
            />
          </div>
            <button type="submit" className="btn btn-success px-5 mt-3">
              Add
            </button>
          
        </form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default AboutAdd;

