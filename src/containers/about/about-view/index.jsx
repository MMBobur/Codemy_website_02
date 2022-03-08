import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

// import icons

import { BsPencil, BsTrash } from "react-icons/bs";
const AboutView = () => {
  const [aboutData, setAboutData] = useState([]);
  const [deleteDiv, setDeleteDiv] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/about`).then((res) => {
      const aboutData = res.data;
      setAboutData(aboutData);
    });
  }, []);

  const deleteItem = () => {
    setDeleteDiv(true);
  };

  const DeleteOff = () => {
    setDeleteDiv(false);
  };

  const DeleteOn = (id) => {
    axios
      .delete(`http://localhost:8080/api/about/${id}`)
      .then(
        (resp) => setAboutData((prev) => prev.filter((item) => item.id !== id)),
        setDeleteDiv(false)
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="about-container container d-flex align-items-center justify-content-center">
      <div className="about-container-block container d-flex row align-items-center justify-content-center py-4 rounded-3">
        <div className="about-view d-flex align-items-center justify-content-start">
          <h1 className="fs-3 about-title">Journal</h1>{" "}
        </div>
        <div className="about-view d-flex align-items-center justify-content-end">
          {" "}
          <Link to="about/add" className="btn btn-success px-3">
            Add
          </Link>
        </div>
        <div className="about-view">
          <table className="table  table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Image</th>
                <th scope="col">Number</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
              {aboutData.map((data, index) => (
            <tbody  key={data.id}>
                {deleteDiv && (
                    <div className="about-delete-page d-flex align-items-center justify-content-center row p-2">
                      <h5 className="text-center">
                        Are you sure you want to turn it off?
                      </h5>
                      <div className="d-flex align-items-center justify-content-center">
                        <button
                          onClick={() => DeleteOff}
                          className="bnt btn-success mx-2 border-0 border rounded-3 p-1 px-3"
                        >
                          No
                        </button>
                        <button
                          onClick={() => DeleteOn(data.id)}
                          className="bnt btn-danger mx-2  border-0 border rounded-3 p-1 px-3"
                        >
                          Yes
                        </button>
                      </div>
                    </div>
                  )}
                <tr>
                  <td scope="row">{data.title}</td>
                  <td>
                    <img src={data.img_url} alt="" height="30px" />
                  </td>
                  <td>{index + 1}</td>
                  <td>{data.createdAt}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={`/about/edit/${data.id}`}
                        className="p-2 text-white bg-success d-flex align-items-center justify-content-center rounded-circle"
                      >
                        <BsPencil />
                      </Link>
                      <div
                        onClick={() => deleteItem(data.id)}
                        className="p-2 text-white bg-danger d-flex align-items-center justify-content-center rounded-circle mx-2"
                      >
                        <BsTrash />
                      </div>
                    </div>
                  </td>
                </tr>
            </tbody>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
