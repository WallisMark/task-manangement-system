import { cache } from "react";
import { Tasks } from "./types/tasks";

const baseUrl = "http://localhost:3002/tasks";

export const getAllTasks = async(): Promise<Tasks[]> => {

    const res = await fetch("http://localhost:3002/tasks",{cache:"no-store"});
    const tasks = await res.json();
    return tasks;
} 

export const addTask = async (task: Tasks): Promise<Tasks> =>{
    const res = await fetch("http://localhost:3002/tasks",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(task)
    })
    const newTask = await res.json()
    return newTask
}

export const editTask = async (task: Tasks): Promise<Tasks> => {
    const res = await fetch(`http://localhost:3002/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const updatedTodo = await res.json();
    return updatedTodo;
  }
  
  export const deleteTodo = async (id: string): Promise<void> => {
    await fetch(`http://localhost:3002/tasks/${id}`, {
      method: 'DELETE',
    })
  }