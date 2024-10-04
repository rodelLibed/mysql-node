"use client"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function FormComponent() {
  const router = useRouter()
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    gender: ""
  })

 const handleSubmit = (e) => {
   e.preventDefault()
   
   axios.post("http://localhost:5000/add_user", values)
   .then((res) => {
    console.log(res)
    router.push("/")
     
   })
   .catch((err)=>console.log(err))
 }

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">User Information</h2>
      <p className="text-gray-600 mb-6">Please fill out the form below</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
           onChange={(e)=>setValues({...values, name: e.target.value})}
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
           onChange={(e)=>setValues({...values, email: e.target.value})}
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
           onChange={(e)=>setValues({...values, age: e.target.value})}
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
           onChange={(e)=>setValues({...values, gender: e.target.value})}
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
    </div>
  </div>
  )
}


function Conversion(){
  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">User Information</h2>
        <p className="text-gray-600 mb-6">Please fill out the form below</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
             onChange={(e)=>setValues({...values, name: e.target.value})}
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
             onChange={(e)=>setValues({...values, email: e.target.value})}
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
             onChange={(e)=>setValues({...values, age: e.target.value})}
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
             onChange={(e)=>setValues({...values, gender: e.target.value})}
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
      </div>
    </div>
  )
}