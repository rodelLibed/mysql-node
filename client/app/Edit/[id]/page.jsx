"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
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
    <Card className="w-full max-w-md mx-auto">
    <CardHeader>
      <CardTitle>User Information</CardTitle>
      <CardDescription>Please fill out the form below</CardDescription>
    </CardHeader>
    <CardContent>
    
      {data.map((student) => {
        return (
            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input value={student.name} onChange={(e)=>setData([{...data[0], name: e.target.value}])} id="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input value={student.email} onChange={(e)=>setData([{...data[0], email: e.target.value}])} id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input value={student.age} onChange={(e)=>setData([{...data[0], age: e.target.value}])} id="age" type="number" placeholder="Enter your age" required min="0" max="120" />
            </div>
            <div className="space-y-2">
            <Label htmlFor="age">Gender</Label>
            <Input value={student.gender} onChange={(e)=>setData([{...data[0], gender: e.target.value}])} id="gender"  placeholder="Enter your age" required min="0" max="120" />
            </div>
    <div className="space-y-2">
    <Button className="w-full">Submit</Button>
    </div>
  
  </form>
        )
      })}
      
    </CardContent>
    
  </Card>
  )
}

export default Edit
