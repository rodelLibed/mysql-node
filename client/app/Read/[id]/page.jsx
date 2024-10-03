"use client"


import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "next/navigation"

export default function Read() {
  const params = useParams()
  const { id } = params
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5000/get_student/${id}`)
    .then((res) => {
      setData(res.data)
    })
    .catch(err => console.log(err))
  }, [id])


  return (
    <div className="">
       <div>{data.map((student) => (
        <>
         <h1 className="text-black text-xl">{student.id}</h1>
         <h1 className="text-black text-xl">{student.name}</h1>
         <h1 className="text-black text-xl">{student.email}</h1>
         <h1 className="text-black text-xl">{student.age}</h1>
         <h1 className="text-black text-xl">{student.gender}</h1>
        </>
       ))}</div>
    </div>
  )
}