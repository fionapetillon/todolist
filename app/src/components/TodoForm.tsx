'use client';
import React, {useState} from "react";

interface TodoFormProps {
    addTodo: (todo:any) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {

    const [value, setValue] = useState("");
    const handleSubmit = (e:any) => {
        e.preventDefault()
        addTodo(value);
        setValue("");
    }

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <input type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="outline-none bg-inherit px-[0.5rem] py-[1rem] mt-4 mb-8 w-80 border-[#22242a]"
            placeholder="Quelles sont les tâches aujourd'hui ?" />
            <button type="submit" className="cursor-pointer bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 rounded-md w-full px-2 py-1.5">Ajouter une tâche</button>
        </form>
    )
}

export default TodoForm;