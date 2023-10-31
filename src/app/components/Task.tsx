
"use client"
import { useRouter } from "next/navigation"
import { Tasks } from "../../../types/tasks"
import { FormEventHandler, useState } from "react";
import {BiEditAlt} from "react-icons/bi"
import {MdDeleteForever} from "react-icons/md"
import { deleteTodo,editTask } from "../../../api";
import Modal from "./Modal";


export interface TaskProps{
    task: Tasks
}

const Task:React.FC <TaskProps> = ({task}) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalDeleted, setOpenModalDeleted] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.title);

    const handleSubmitEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTask({
        id: task.id,
        title: taskToEdit,
      });
        setOpenModalEdit(false);
        router.refresh();
      };
    
      const handleDeleteTask = async (id: string) => {
        await deleteTodo(id);
        setOpenModalDeleted(false);
        router.refresh();
      };
  return (
    <tr key={task.id}>
        <td>{task.title}</td>
        <td><BiEditAlt onClick={() => setOpenModalEdit(true)} cursor="pointer" size ={20}/>
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTask}>
            <h3 className='font-bold text-lg'>Edit task</h3>
            <div className='modal-action'>
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full'
              />
              <button type='submit' className='btn'>
                Edit Task
              </button>
            </div>
          </form>
        </Modal>
        </td>
        <td><MdDeleteForever onClick={() => setOpenModalDeleted(true)}cursor="pointer" size ={20} className ="text-red-600"/>
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className='text-lg'>
            Are you sure, you want to delete this task?
          </h3>
          <div className='modal-action'>
            <button onClick={() => handleDeleteTask(task.id)} className='btn'>
              Yes
            </button>
          </div>
        </Modal>
        </td>

      </tr>

)
}

export default Task



// import { Task } from "@/types/tasks";
// import { FormEventHandler, useState } from "react";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import Modal from "./Modal";
// import { useRouter } from "next/navigation";
// import { deleteTodo, editTodo } from "@/api";

// interface TaskProps {
//   task: ITask;
// }

// const Task: React.FC<TaskProps> = ({ task }) => {
//   const router = useRouter();
//   const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
//   const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
//   const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

//   const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();
//     await editTodo({
//       id: task.id,
//       text: taskToEdit,
//     });
//     setOpenModalEdit(false);
//     router.refresh();
//   };

//   const handleDeleteTask = async (id: string) => {
//     await deleteTodo(id);
//     setOpenModalDeleted(false);
//     router.refresh();
//   };

//   return (
//     <tr key={task.id}>
//       <td className='w-full'>{task.text}</td>
//       <td className='flex gap-5'>
//         <FiEdit
//           onClick={() => setOpenModalEdit(true)}
//           cursor='pointer'
//           className='text-blue-500'
//           size={25}
//         />
//         <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
//           <form onSubmit={handleSubmitEditTodo}>
//             <h3 className='font-bold text-lg'>Edit task</h3>
//             <div className='modal-action'>
//               <input
//                 value={taskToEdit}
//                 onChange={(e) => setTaskToEdit(e.target.value)}
//                 type='text'
//                 placeholder='Type here'
//                 className='input input-bordered w-full'
//               />
//               <button type='submit' className='btn'>
//                 Submit
//               </button>
//             </div>
//           </form>
//         </Modal>
//         <FiTrash2
//           onClick={() => setOpenModalDeleted(true)}
//           cursor='pointer'
//           className='text-red-500'
//           size={25}
//         />
//         <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
//           <h3 className='text-lg'>
//             Are you sure, you want to delete this task?
//           </h3>
//           <div className='modal-action'>
//             <button onClick={() => handleDeleteTask(task.id)} className='btn'>
//               Yes
//             </button>
//           </div>
//         </Modal>
//       </td>
//     </tr>
//   );
// };

// export default Task;