import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';

const DasturlashTillariAdd = () => {
  const [ImageURL, setImageURL] = useState(undefined);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const handleSubmit = async (e) => {
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
      .post("http://localhost:8080/api/proglang", formData)
      .then((resp) => {
        alert("Product successfully Created!!!");
        setTitle("");
        setImageURL("");
        setDescription("");
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" my-5 mx-5 px-3 py-5 ">
      <h2>Codemy NEW DATA ADD</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            onChange={(e) => setImageURL(e.target.files[0])}
            type="file"
            placeholder="Enter the URL of image"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image Title</Form.Label>
          <Form.Control
            onChange={(e) => setTitle(e.target.value)}
            value={Title}
            type="text"
            placeholder="Enter the title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Text </Form.Label>
          <Form.Control
            onChange={(e) => setDescription(e.target.value)}
            value={Description}
            type="text"
            placeholder="Enter the description"
          />
        </Form.Group>

        <Button
          style={{ border: "#3c4b64" }}
          onClick={handleSubmit}
        >
          Add
        </Button>
        <Link to="/dasturlashtillari" className="btn btn-outline-primary my-3 mx-3">Back to</Link>
      </Form>
    </div>
  );
};

export default DasturlashTillariAdd;
