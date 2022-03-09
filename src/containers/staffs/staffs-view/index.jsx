import React, { useEffect, useState } from "react";
import axios from "axios";
import {Row, Col, Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import {Link} from 'react-router-dom'
import '../staffs-add/style.css'
const StaffsView = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/about")
    .then((res) => {
      setAboutData(aboutData);
      console.log(res.data);
    })
  }, [])

  return (
    <div>
      <div className="tort1">
        <Link to='/staffs/add' className="tort">Add</Link>
      </div>
      <Table striped bordered hover style={{marginLeft: 40, marginRight: 1000, width: 1150}}>
        <thead>
          <tr>
            <th style={{textAlign: "center"}}>#</th>
            <th>Img</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{textAlign: "center"}}>1</td>
            <td></td>
            <td>John</td>
            <td>Mark</td>
            <td>ilmiddinm777@gmail.com</td>
            <td>com</td>
            <td style={{width: 60, textAlign: "center"}}><Link to="/staffs/edit"><FaEdit style={{color: "green", border: 2, fontSize: 30}} className='besh'/></Link></td>
            <td style={{width: 60, textAlign: "center"}}><Link to="/staffs/edit"><AiFillDelete style={{color: "red", border: 2, fontSize: 30}} className='besh'/></Link></td>
          </tr>          
        </tbody>
      </Table>
    </div>
    
  );
};

export default StaffsView;
