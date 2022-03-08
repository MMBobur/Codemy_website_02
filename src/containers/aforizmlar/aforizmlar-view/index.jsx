import axios from "axios";
import React, { useEffect, useState, setStatus } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

import { IoMdCreate } from "react-icons/io";
import { IoTrashSharp } from "react-icons/io5";

export default function AboutView() {
  const [aforizm, setAforizm] = useState([]);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate("/aforizmlar/add", { state: id });
  };

  useEffect(() => {
    fetchAforizmlar();
  }, []);

  const fetchAforizmlar = () => {
    axios
      .get("http://localhost:8080/api/aforizm")
      .then((resp) => {
        const filteredData = resp.data.map((item) => ({
          id: item.id,
          image: item.img_url,
          title: item.title,
          text: item.text,
        }));
        console.log("Filtered data", filteredData);
        setAforizm(filteredData);
      })
      .catch((err) => console.log(err));
  };

  const fetchDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/aforizm/${id}`)
      .then((result) => {
        fetchAforizmlar();
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div className="m-5">
        <h1>Aforizm</h1>
      </div>
      {/* sup add start */}
      <sup className="d-flex justify-content-end add">
        <Link to="/aforizmlar/add" className="border border-success rounded bg-success p-3 text-white add">Add</Link>
      </sup>
      {/* sup add end */}

      {/* ui start */}
      <div className="container px-5">
        <table style={{ width: "100%" }}>
          <tr className="">
            <th>Name</th>
            <th>Image</th>
            <th>Text</th>
            <th>Edit</th>
          </tr>
          <div className="pb-3"></div>
          {aforizm.map((item, idx) => (
            <tr className="border">
              <td style={{fontSize:'20px',fonWeight:'600'}} className='ml3'>{item.title}</td>
              <td>
                <img style={{ width: "50px" }} src={item.image} alt="" />
              </td>
              <td style={{fontSize:'20px',fonWeight:'600'}}>{item.text}</td>
              <td>
                <button onClick={() => handleNavigate(item.id)} className='p-2 editbtn'>
                  <IoMdCreate />
                </button>
                <span className="p-2"></span>
                <button onClick={() => fetchDelete(item.id)} className='p-2 editbtn'>
                  <IoTrashSharp />
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
