import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom'
const VideoAdd = () => {

  const navigate = useNavigate();

  const [ImageURL, setImageURL] = useState(undefined);
  const [Title, setTitle] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("file", ImageURL);
    formData.append("title", Title);
    
    const config = {
      header: {
        "content-type": "multipart/form-data",
      },
    };
    
  

  
    axios
      .post("http://localhost:8080/api/carousel", formData)
      .then((resp) => {
        alert("Product successfully Created!!!");
        setTitle("");
        setImageURL("");
        navigate('/corusel')
      })
      .catch((err) => console.log(err));
  }


  return (
    <div className="video_view my-5 mx-5 px-3 py-5">
      <div>
        <h3>Welcome to the Codemy website</h3>
      </div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Titel</Form.Label>
          <Form.Control
            onChange={(e) => setTitle(e.target.value)}
            value={Title}
            type="text"
            placeholder="Enter the title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            onChange={(e) => setImageURL(e.target.files[0])}
            type="file"
            placeholder="Enter the URL of image"
          />
        </Form.Group>

        

        <Button
          style={{ backgroundColor: "#3c4b64", border: "#3c4b64",  }}
          onClick={handleSubmit}
        >
          Add
        </Button>
        <Link to="/corusel">
          <Button
            style={{ backgroundColor: "#3c4b64", border: "#3c4b64",marginLeft:'50px' }}
          >
            Cancel
          </Button>
          </Link>
      </Form>
    </div>
  );
};

export default VideoAdd;