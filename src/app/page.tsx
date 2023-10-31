import { getAllTasks } from "../../api";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";


export default async function Home() {

  const tasks = await getAllTasks();
  
  return (
    <div className="max-w-4xl mx-auto">
        <div className=" text-center mt-6 flex flex-col gap-4">
          <h1 className="font-bold text-2xl mb-10">Task Management App</h1>
          </div>
          <AddTask/>
          <TaskList tasks = {tasks}/>
    </div>
  )
}
