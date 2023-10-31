import { Tasks } from "../../../types/tasks"
import Task from "./Task"

export interface TasksProps{
    tasks:Tasks[]
}

const TaskList: React.FC<TasksProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Task Name</th>
        <th>Edit Task</th>
        <th>Delete Task</th>
      </tr>
    </thead>
    <tbody>
     {tasks.map(task =>(
      <Task key={task.id} task= {task}/>

     ))}
      
    </tbody>
  </table>
</div>
  )
}

export default TaskList
