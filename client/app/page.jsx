"use client"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [data, setData] = useState([])
  const [deleted, setDeleted] = useState(true)

  useEffect(()=>{
    if(deleted) {
      setDeleted(false)
      axios.get("http://localhost:5000/students")
      .then((res) => {
        setData(res.data)
      })
      .catch(err => console.log(err))
    }
    
  }, [deleted])

  const handleRead = (id) => {
    router.push(`/Read/${id}`)
    
  }

  const handleEdit = (id) => {
    router.push(`/Edit/${id}`)
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`)
    .then((res) => {
       console.log(res.data)
       setDeleted(true)
    })
    .catch((err)=>console.log(err))
  }

  return (
    <div className="container mx-auto py-6">
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <Button onClick={() => router.push("/Create")}>Add User</Button>
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.age}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleRead(user.id)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                 
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Read</span>
                  
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEdit(user.id)}
                      className="text-yellow-600 hover:text-yellow-900"
                    >
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}