import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ToDoComponent = ({text,updateMode,deleteToDo}) =>{
    return (
        <div className="todo">
            <div className="text">
                {text}
            </div>
            <div className="icons">
                <BiEdit className="icon" onClick={updateMode} />
                <AiFillDelete className="icon" onClick={deleteToDo}/>
            </div>
        </div>
    )
}

export default ToDoComponent