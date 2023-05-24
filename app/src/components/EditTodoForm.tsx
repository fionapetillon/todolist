'use client';
import React, {useState} from "react";

interface EditTodoFormProps {
    task: any;
    editTodo: (value: any, task: any) => void;
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task);

    const handleSubmit = (e:any) => {
        e.preventDefault()
        editTodo(value, task.id);
        setValue("");
    }

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex items-center mt-4 mb-8">
                <input type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-inherit px-[0.5rem] py-[1rem] w-3/4 outline-none rounded-md"
                placeholder="Editer la tâche" />
                <button type="submit" className="w-1/4 cursor-pointer bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 rounded-md px-2 py-1.5">Modifier</button>
            </div>

        </form>
    )
}

export default EditTodoForm;