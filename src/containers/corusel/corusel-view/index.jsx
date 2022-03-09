import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Index() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/carousel/").then((res) => {
      setData(res.data);
      // console.log(res.data);
    });
  }, [loading]);

  const deleteItem = (id) => {
    let a = window.confirm("O'chirmoqchimisiz");

    if (a === true) {
      axios
        .delete(`http://localhost:8080/api/carousel/${id}`)
        .then((resp) => {
          if (resp.status === 200) {
            setLoading(!loading);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Table
        style={{
          width: "76%",
          height: "50px",
          marginLeft: "12%",
          color: "#C8CCD3",
          marginTop: "50px",
          borderRadius: "20px",
        }}
      >
        <tbody style={{ height: "50px", border: "none", padding: "50px" }}>
          <tr>
            <td style={{ border: "none", textAlign: "center" }}>
              <h1>Journal</h1>
            </td>
            <td style={{ border: "none" }}></td>
            <td style={{ border: "none" }}></td>
            <td
              style={{
                border: "none",
                paddingTop: "40px",
                textAlign: "center",
              }}
            >
              {" "}
              <Link to="/corusel/add">
                <Button>Add</Button>
              </Link>{" "}
            </td>
          </tr>
          <tr
            style={{ fontSize: "22px", fontWeight: "700", textAlign: "center" }}
          >
            <td>Fullname</td>
            <td>Image</td>
            <td>Date</td>
            <td>Edit</td>
          </tr>
          {data.map((value, index) => (
            <tr
              key={index}
              style={{
                height: "40px",
                fontSize: "21px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              <td style={{ height: "50px", width: "250px" }}>{value.title}</td>
              <td style={{ height: "50px" }}>
                {" "}
                <img
                  src={value.img_url}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />{" "}
              </td>
              <td>{value.createdAt}</td>
              {/* /corusel/edit */}
              <td
                style={{
                  width: "20%",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Link to={`/corusel/edit/${value.id}`}>
                  <Button
                    style={{
                      background: "#58B658",
                      width: "50px",
                      height: "50px",
                      borderRadius: "360px",
                      padding: "3px",
                      textAlign: "center",
                      border: "none",
                    }}
                  >
                    <GrEdit style={{ color: "yellow" }} />
                  </Button>
                </Link>

                <Button
                  onClick={() => deleteItem(value.id)}
                  style={{
                    background: "#FF4745",
                    color: "#FFC7D2",
                    width: "50px",
                    height: "50px",
                    borderRadius: "360px",
                    padding: "3px",
                    textAlign: "center",
                    border: "none",
                    marginLeft: "15px",
                  }}
                >
                  <RiDeleteBin6Line />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Index;
