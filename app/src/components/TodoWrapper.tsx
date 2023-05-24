'use client';
import React, {useState} from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

interface TodoWrapperProps {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
}

const TodoWrapper = () => {

    const [todos, setTodos] = useState<TodoWrapperProps[]>([]);

    const addTodo = (todo: string) => {
        const newTodo = {
          id: uuidv4(),
          task: todo,
          completed: false,
          isEditing: false,
        };
    
        setTodos([...todos, newTodo]);
    };
    

    const toggleCompleted = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, completed: !todo.completed} : todo))
    }  

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id:string) => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, isEditing: !todo.isEditing } : todo))
    }
    
    const editTask = (task: any, id:string) => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    return (
        <div className="bg-neutral-700/10 mt-20 p-8 rounded-md">
            <h1 className="text-center text-2xl font-semibold">Objectifs du jour !</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} /> 
                ) : (

                    <Todo task={todo} key={index} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} editTodo={editTodo} />
                )
            ))}
        </div>
    )
}

export default TodoWrapper;