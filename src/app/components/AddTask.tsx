import {AiOutlinePlus} from "react-icons/ai"

const AddTask = () => {
  return (
    <button className="btn btn-primary font-mono w-full">
        Add New Task <AiOutlinePlus size={24} className="max-auto pb-1"/>
    </button>
  )
}

export default AddTask
