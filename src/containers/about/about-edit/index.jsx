import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const AboutEdit = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img_url, setImgUrl] = useState(undefined);


  useEffect(() => {
    axios.get(`http://localhost:8080/api/about/${id}`).then((res) => {
      setImgUrl(res.data.img_url);
      setTitle(res.data.title);
      setText(res.data.text);
    });
    return () => {
      setImgUrl(undefined)
      setTitle("")
      setText("")
  };
  }, []);


  const Submit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", img_url);
    formData.append("title", title);
    formData.append("text", text);
    const config = {
      header: {
        "content-type": "multipart/form-data",
      },
    };

      axios
        .put(`http://localhost:8080/api/about/${id}`, formData)
        .then((resp) => {
          navigate("/");
          setTitle("");
          setText("");
          setImgUrl("");
        
        })
        .catch((err) => console.log(err));
    } 

  return (
    <div className="add-container container mt-5">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 border rounded-3 p-4">
          <form onSubmit={Submit}>
            <h1 className="d-flex align-items-center justify-content-center mt-2">
              Post Edit
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
            <Link to="/" className="btn btn-danger mx-4 px-5 mt-3">
              Cancel
            </Link>
          </form>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default AboutEdit;
