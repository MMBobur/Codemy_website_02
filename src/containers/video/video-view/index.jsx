import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { FaBan, FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

const VdeoView = () => {
  const [videoData, setVideoData] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate("/video/edit", { state: id });
  };

  useEffect(() => {
    fetchVideo()
  }, []);

  const fetchVideo=()=>{
    axios.get("http://localhost:8080/api/videos")
    .then((resp) => {
      const filteredData = resp.data.map((item) => ({
        id: item.id,
        title: item.title,
        img_url: item.img_url,
        text: item.text,
        url: item.Url,
      }));
      console.log("Filtered data", filteredData);
      setVideoData(filteredData);
    })
    }
  const Delete = (id) => {
    axios.delete(`http://localhost:8080/api/videos/${id}`)
    .then((res) => {
      fetchVideo()
    })
    .catch((err) => {});
  };

  return (
    <div className="video_view my-5 mx-5 px-3">
      <div className="d-flex gap-5 my-5 mx-5">
        <div className="video_text">
          <h4>Video</h4>
        </div>
        <div className="video_add_btn">
          <Link to="/video/add">
            <Button style={{ backgroundColor: "green" }} size="lg" active>
              Add
            </Button>
          </Link>
        </div>
        <div></div>
      </div>

      <div>
        <Table className="video_table" striped bordered hover>
          <thead>
            <tr className="table_header">
              <th>T/r</th>
              <th>Video</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {videoData.map((data, key) => (
              <tr key={key}>
                <td>{data.id}</td>
                <td>
                  <video style={{ maxWidth: 100 }} src={data.Url}></video>
                </td>
                <td>
                  <img
                    style={{ width: 100, height: 100 }}
                    src={data.img_url}
                    alt=""
                  />
                </td>
                <td>{data.title}</td>
                <td>{data.text}</td>
                <td className="d-flex">
                  <div
                    onClick={() => handleNavigate(data.id)}
                    className="edit_icon"
                  >
                    <FaEdit />
                  </div>

                  <div onClick={() => Delete(data.id)} className="del_icon">
                    <FaBan />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default VdeoView;
