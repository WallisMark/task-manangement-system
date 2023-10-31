"use client"

import {AiOutlinePlus} from "react-icons/ai"
import Modal from "./Modal"
import { FormEvent, FormEventHandler, useState } from "react"
import { addTask } from "../../../api"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const router = useRouter()
  const[newTaskValue, setNewTaskValue] = useState ("")
  const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async(e) =>{

    e.preventDefault()
    await addTask ({
      id: uuidv4(),
      title: newTaskValue
    })
    setNewTaskValue("")
    setModalOpen(false)
    router.refresh()

  }

  const [modalOpen,setModalOpen]= useState(false)
  return (
   <div>
      <button 
      className="btn btn-primary font-mono w-full"
      onClick={()=>setModalOpen(true)}>
          Add New Task <AiOutlinePlus size={24} className="max-auto pb-1"/>
      </button>
     <Modal modalOpen ={modalOpen} setModalOpen = { setModalOpen} >
      <form onSubmit={handleSubmitNewTask}>
        <h3 className="font-bold text-lg"> Add New Task</h3>
        <input 
        type="text"
        placeholder="Type here"
        className="input input-bordered input-success w-full max-w-xs"
        value={newTaskValue}
        onChange={e => setNewTaskValue(e.target.value)} />
        <button 
        type="submit"
        className=" ml-3 btn btn-outline btn-success">Add</button>
      </form>
      </Modal>
   </div> 
  )
}

export default AddTask
