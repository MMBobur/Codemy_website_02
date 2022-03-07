import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Button, Form } from "react-bootstrap";

const VideoEdit = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [VideoURL, setVideoURL] = useState("");
  const [ImageURL, setImageURL] = useState(undefined);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8080/api/videos/${state}`).then((res) => {
      setVideoURL(res.data.Url);
      setImageURL(res.data.img_url);
      setTitle(res.data.title);
      setDescription(res.data.text);
    });
  }, [state]);

  const Submit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("text", Description);
    formData.append("file", ImageURL);
    formData.append("title", Title);
    formData.append("Url", VideoURL);
    const config = {
      header: {
        "content-type": "multipart/form-data",
      },
    };

      axios
        .put(`http://localhost:8080/api/videos/${state}`, formData)
        .then((resp) => {
          alert("Product successfully Updated!!!");
          navigate("/video", { replace: true });
          setTitle("");
          setImageURL("");
          setDescription("");
          setVideoURL("");
        })
        .catch((err) => console.log(err));
    } 



  return (
    <div>
      <div className="video_view my-5 mx-5 px-3 py-5">
        <div>
          <h3>Video Tahrirlash</h3>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Video URL</Form.Label>
            <Form.Control
              onChange={(e) => setVideoURL(e.target.value)}
              value={VideoURL}
              type="text"
              placeholder="Enter the URL of video"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              onChange={(e) => setImageURL(e.target.files[0])}
              // value={ImageURL}
              type="file"
              placeholder="Enter the URL of image"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Video Title</Form.Label>
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              value={Title}
              type="text"
              placeholder="Enter the title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Video Description</Form.Label>
            <Form.Control
              onChange={(e) => setDescription(e.target.value)}
              value={Description}
              type="text"
              placeholder="Enter the description"
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
