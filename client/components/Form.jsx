"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
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
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>User Information</CardTitle>
        <CardDescription>Please fill out the form below</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input onChange={(e)=>setValues({...values, name: e.target.value})} id="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input onChange={(e)=>setValues({...values, email: e.target.value})} id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input onChange={(e)=>setValues({...values, age: e.target.value})} id="age" type="number" placeholder="Enter your age" required min="0" max="120" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Gender</Label>
            <Input onChange={(e)=>setValues({...values, gender: e.target.value})} id="gender"  placeholder="Enter your age" required min="0" max="120" />
          </div>

          <div className="space-y-2">
          <Button className="w-full">Submit</Button>
          </div>
        
        </form>
      </CardContent>
      
    </Card>
  )
}