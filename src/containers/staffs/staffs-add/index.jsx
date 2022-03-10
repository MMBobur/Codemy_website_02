import './style.css'
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom'

const StaffsAdd = () => {
  const navigate=useNavigate()

  const [img, setImg]=useState(undefined)
  const [name, setName]=useState("")
  const [username, setUsername]=useState("")
  const [email, setEmail]=useState("")
  const [experience, setExperience]=useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
  
    formData.append("file", img);
    formData.append("name", name);
    formData.append("surname", username);
    formData.append("email", email);
    formData.append("experience", experience);
    const config = {
      header: {
        "content-type": "multipart/form-data",
      },
    };
    
    axios
      .post("http://localhost:8080/api/staff", formData)
      .then((resp) => {
        alert("Product successfully Created!!!");
        setImg("")
        setName("");
        setUsername("");
        setEmail("");
        setExperience("");
        navigate('/staffs')
      })
      // .catch((err) => console.log(err));
  }
  return (
    <div className="bir">
      <h1 className='add1'>Add</h1>
      <Form className='bir'>
      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Username..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            onChange={(e) => setExperience(e.target.value)}
            value={experience}
            type="text"
            placeholder="Experience..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Img</Form.Label>
          <Form.Control
            onChange={(e) => setImg(e.target.files[0])}
            type="file"
            placeholder="Enter the URL of image"
          />
        </Form.Group>

        

        <Button
          className='button'
          onClick={handleSubmit}
        >
          Add
        </Button>
        <Link to="/staffs">
          <button className='add'>
            Cancel
          </button>
          </Link>
      </Form>
    </div>
    );
};

export default StaffsAdd;
