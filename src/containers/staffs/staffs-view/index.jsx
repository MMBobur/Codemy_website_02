import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { Link } from "react-router-dom";
import axios from "axios";
import './styles.css'

function Index() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/staff/").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [loading]);

  const deleteItem = (id) => {
    let a = window.confirm("O'chirmoqchimisiz");

    if (a === true) {
      axios
        .delete(`http://localhost:8080/api/staff/${id}`)
        .then((resp) => {
          if (resp.status === 200) {
            setLoading(!loading);
          }
        })
        .catch((err) => console.log(err));
    }
  };


  return (
    <div className="staffs">
      {" "} <Link to="/staffs/add" className="staf"><button className="staff">Add</button></Link>{" "}
      <table className="staff1"> 
        <tr className="staff2">
          <th className="staff3">Image</th>
          <th className="staff3">Name</th>
          <th className="staff3">Username</th>
          <th className="staff3">Email</th>
          <th className="staff3">Experience</th>
          <th className="staff3">Edit</th>
          <th className="staff3">Delete</th>
        </tr>
        {data.map((value, index) => (
          <tr key={index} className="staff4">
            <td className="staff41">{" "}
              <img src={value.img_url} alt="" className="staff5"/>{" "}</td>
            <td className="staff6">{value.name}</td>
            <td className="staff6">{value.surname}</td>
            <td className="staff6">{value.email}</td>
            <td className="staff6">
               {value.experience} 
            </td>
            <td className="staff61">
              <Link to={`/staffs/edit/${value.id}`} className="staff8">
                <GrEdit className="staff10"/>
              </Link>
            </td>
            <td className="staff61">
            <button
                onClick={() => deleteItem(value.id)} className="staff11"><RiDeleteBin6Line className="staff12"/></button>
            </td>
          </tr>
        ))}
      </table>
    </div>
    
  );
};

export default Index;
