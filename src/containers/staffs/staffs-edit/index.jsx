import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const StaffsEdit = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [ImageURL, setImageURL] = useState(undefined);
  const [Name, setName] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Experience, setExperience] = useState("");
 
  useEffect(() => {
    axios.get(`http://localhost:8080/api/staff/${id}`).then((res) => {
      setImageURL(res.data.img_url);
      setName(res.data.name);
      setUsername(res.data.surname);
      setEmail(res.data.email);
      setExperience(res.data.experience);
    });
    return () => {
      setImageURL(undefined)
      setName("")
      setUsername("")
      setEmail("")
      setExperience("")
  };
  }, []);

  const Submit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", ImageURL);
    formData.append("name", Name);
    formData.append("surname", Username);
    formData.append("email", Email);
    formData.append("experience", Experience);
    const config = {
      header: {
        "content-type": "multipart/form-data",
      },
    };

      axios
        .put(`http://localhost:8080/api/staff/${id}`, formData)
        .then((resp) => {
          alert("Product successfully Updated!!!");
          navigate("/staffs");
          setName("");
          setUsername("");
          setEmail("");
          setExperience("");
          setImageURL("");
        
        })
        .catch((err) => console.log(err));
    } 

  return (
    <div>
      <div className="video_view my-5 mx-5 px-3 py-5">
        <div>
          <h1 className="edit">Edit user</h1>
        </div>
        <Form className="edit1">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              value={Name}
              type="text"
              placeholder="Enter the title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={(e) => setUsername(e.target.value)}
              value={Username}
              type="text"
              placeholder="Enter the title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
              type="text"
              placeholder="Enter the title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Experience</Form.Label>
            <Form.Control
              onChange={(e) => setExperience(e.target.value)}
              value={Experience}
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
            onClick={Submit}
          >
            Edit
          </Button>
          <Link to="/staffs">
          <button className="edit4">
            Cancel
          </button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default StaffsEdit;
