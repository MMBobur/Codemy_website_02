import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form } from "react-bootstrap";

const VideoEdit = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [ImageURL, setImageURL] = useState(undefined);
  const [Title, setTitle] = useState("");
 
  useEffect(() => {
    axios.get(`http://localhost:8080/api/carousel/${id}`).then((res) => {
      setImageURL(res.data.img_url);
      setTitle(res.data.title);
    });
  }, []);

  const Submit = (e) => {
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
        .put(`http://localhost:8080/api/carousel/${id}`, formData)
        .then((resp) => {
          alert("Product successfully Updated!!!");
          navigate("/corusel");
          setTitle("");
          setImageURL("");
        
        })
        .catch((err) => console.log(err));
    } 



  return (
    <div>
      <div className="video_view my-5 mx-5 px-3 py-5">
        <div>
          <h3>Edit user</h3>
        </div>
        <Form>
          

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
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
            style={{ backgroundColor: "#3c4b64", border: "#3c4b64" }}
            onClick={Submit}
          >
            Edit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default VideoEdit;
