import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

function Home() {
    const [Data, setData] = useState(undefined)
    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/users").then(
            v => {
                setData(v.data)
            }
        )
    }, [])
    
  return (
    <div>
        {Data?Data.map(v=>{
            return (
                <div>
                    <Link to={`/staffs/edit/one/`+v.id}>{v.name}</Link>
                </div>
            )
        }):""}
        <div className="staffs">
        <h4>O'zgartirish kiritish</h4>
        <div>
          <label className="uch">Name</label>
          <br />
          <input type="text" className="ikki" placeholder="Name..."/>
        </div>
        <div>
          <label className="uch">Surname</label>
          <br />
          <input type="text" className="ikki" placeholder="Surname..."/>
        </div>
        <div>
          <label className="uch">Email</label>
          <br />
          <input type="email" className="ikki" placeholder="Email..."/>
        </div>
        <div>
          <label className="uch">Experience</label>
          <br />
          <input type="text" className="ikki" placeholder="Experience..."/>
        </div>
        <div>
          <label className="uch">Rasm yuklash</label>
          <br />
          <input type="file" />
        </div>
        <button className="olti">Edit</button>
        <Link to='/staffs' className="yetti">Cancel</Link>
      </div>
    </div>
  )
}

export default Home