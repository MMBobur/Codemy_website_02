import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Button, Form } from "react-bootstrap";

const DasturlashTillariEdit = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [ImageURL, setImageURL] = useState(undefined);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8080/api/proglang/${state}`).then((res) => {
      setImageURL(res.data.img_url);
      setTitle(res.data.img_title);
      setDescription(res.data.text);
    });
  }, [state]);

  const Submit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("text", Description);
    formData.append("file", ImageURL);
    formData.append("img_title", Title);
    const config = {
      header: {
        "content-type": "multipart/form-data",
      },
    };

      axios
        .put(`http://localhost:8080/api/proglang/${state}`, formData)
        .then((resp) => {
          alert("Product successfully Updated!!!");
          navigate("/dasturlashtillari", { replace: true });
          setTitle("");
          setImageURL("");
          setDescription("");
        })
        .catch((err) => console.log(err));
    } 



  return (
    <div>
      <div className=" my-5 mx-5 px-3 py-5">
        <div>
          <h3>Codemy Edit</h3>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              onChange={(e) => setImageURL(e.target.files[0])}
              type="file"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image Title</Form.Label>
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              value={Title}
              type="title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Text</Form.Label>
            <Form.Control
              onChange={(e) => setDescription(e.target.value)}
              value={Description}
              type="text"
            />
          </Form.Group>

          <Button
            style={{border: "#3c4b64" }}
            onClick={Submit}
          >
            Edit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default DasturlashTillariEdit;
