import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

function Single() {
  const param = useParams()
  const [Data, setData] = useState(undefined)
    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/users/${param.id}`).then(
            v => {
                setData(v.data)
            }
        )
    }, [])
  return (
    <div>
        {Data?<div>
            <h1>{Data.name}</h1>
            <h2>{Data.username}</h2>
        </div>: "loading..."}
    </div>
  )
}

export default Single