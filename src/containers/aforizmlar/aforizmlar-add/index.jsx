import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AforizmlarAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [image, setImage] = useState(undefined);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (state) {
      axios
        .get(`http://localhost:8080/api/aforizm/${state}`)
        .then((resp) => {
          setImage(resp.data.img_url);
          setTitle(resp.data.title);
          setText(resp.data.text);
        })
        .catch((err) => console.log(err));
    }
  }, [state]);

  const submitData = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("file", image);
    formData.append("text", text);

    if (state) {
      axios
        .put(`http://localhost:8080/api/aforizm/${state}`, formData)
        .then((resp) => {
          alert("Product successfully Updated!!!");
          navigate("/aforizmlar", { replace: true });
          setTitle("");
          setImage(undefined);
          setText("");
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post("http://localhost:8080/api/aforizm", formData)
        .then((resp) => {
          alert("Product successfully Created!!!");
          navigate("/aforizmlar", { replace: true });
          setTitle("");
          setImage(undefined);
          setText("");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="aforizm">
      <div className="afTable">
        <h1></h1>
        <form className="afUpdate d-grid justify-content-center" controlId="formBasicEmail">
          <input
            type="text"
            name="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Name'
          />
          <br />
          <input
            className="afChoose"
            type="file"
            name="Image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <br />
          <input
          className=""
            type="text"
            name="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Text'
          />
          <br />
          <button onClick={submitData}>
            {state ? "Update Product" : " Create Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AforizmlarAdd;
