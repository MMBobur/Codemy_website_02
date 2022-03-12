import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineEdit,AiOutlineClose } from "react-icons/ai";

const DasturalshTillariView = () => {
  const navigate = useNavigate();
  const [data,setData]=useState([]);

useEffect(() => {
  fetchImage()
}, []);

const fetchImage=()=>{
  axios.get("http://localhost:8080/api/proglang")
  .then((resp) => {
    const filteredData = resp.data.map((item) => ({
      id: item.id,
      title: item.title,
      img_url: item.img_url,
      text: item.text,
    }));
    console.log("Filtered data", filteredData);
    setData(filteredData);
  })
  }

const Delete = (id) => {
  axios.delete(`http://localhost:8080/api/proglang/${id}`)
  .then((res) => {
    fetchImage()
  })
  .catch((err) => {});
};

const handleNavigate = (id) => {
  navigate("/dasturlashtillari/edit", { state: id });
};

  return <div>
    <div className="container">
      <Link to="/dasturlashtillari/add" className="btn btn-outline-primary my-3 mx-3">Create <AiOutlineEdit/> </Link>
    <table className="table shadow w-75">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Img</th>
      <th scope="col">Img Title</th>
      <th scope="col">Text</th>
    </tr>
  </thead>
  <tbody>
  {data.map((item)=>(
      <tr key={item.id}>
      <th scope="row">{item.id}</th>
      <td>
        <img src={item.img_url} alt={item.img_title} className=" rounded-3 img-thumbnail" width="100px"/>
      </td>
      <td>{item.img_title}</td>
      <td>{item.text}</td>
      <td>
        <button className="btn btn-outline-danger " onClick={() => Delete(item.id)} >Delite <AiOutlineClose/></button>
        <button onClick={()=>handleNavigate(item.id)} className="btn btn-outline-success mx-1">Edite <AiOutlineEdit/></button> 
      </td>
    </tr>
  ))}
  </tbody>
</table>
      </div>
  </div>;
};

export default DasturalshTillariView;
