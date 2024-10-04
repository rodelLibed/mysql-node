"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"


const Edit = () => {
 const { id } = useParams()
 const router = useRouter()
 const [data, setData] = useState([])

 useEffect(()=>{
    axios.get(`http://localhost:5000/get_student/${id}`)
    .then((res)=>{
      setData(res.data)
    })
 }, [id])

 const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:5000/edit_student/${id}`, data[0])
    .then((res) => {
     console.log(res.data)
     router.push("/")
      
    })
    .catch((err)=>console.log(err))
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">User Information</h2>
      <p className="text-gray-600 mb-6">Please fill out the form below</p>
      {data.map((student) => {
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
           value={student.name}
           onChange={(e)=>setData([{...data[0], name: e.target.value}])}
            id="name"
            placeholder="Enter your name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
           value={student.email}
           onChange={(e)=>setData([{...data[0], email: e.target.value}])}
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
           value={student.age}
           onChange={(e)=>setData([{...data[0], age: e.target.value}])}
            id="age"
            type="number"
            placeholder="Enter your age"
            required
            min="0"
            max="120"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <input
           value={student.gender}
           onChange={(e)=>setData([{...data[0], gender: e.target.value}])}
            id="gender"
            placeholder="Enter your gender"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
        )
      })}
      
    </div>
  </div>
  )
}

export default Edit
