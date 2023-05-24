import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface TodoProps {
    task: any;
    toggleCompleted: (task:any) => void;
    deleteTodo : (task:any) => void;
    editTodo : (task:any) => void;
}
const Todo: React.FC<TodoProps> = ({
    task, toggleCompleted, deleteTodo, editTodo
}) =>{
    return (
        <div className="flex justify-between items-center px-3 py-3 rounded-md cursor-pointer mt-4 bg-violet-700">
            <p onClick={() => toggleCompleted(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
            <div className="flex space-x-3">
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}

export default Todo;