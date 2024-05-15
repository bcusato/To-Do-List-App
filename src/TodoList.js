import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    /* Add */
    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, { text: newTodo.trim(), checked: false }]);
            setNewTodo("");
        }
    };

    /* Delete */
    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    /* Toggle */
    const handleToggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].checked = !newTodos[index].checked;
        setTodos(newTodos);
    };


    return (
        <div className="to-do-list">
            <h1 >To-Do List</h1>
            <input type="text" placeholder="Enter a task..." value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button className="add-button" onClick={handleAddTodo}>Add</button>
            <div>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <div>
                                <input type="checkbox" checked={todo.checked} onChange={() => handleToggleTodo(index)} />
                                <span style={{ textDecoration: todo.checked ? "line-through" : "none" }}>{todo.text}</span>
                                <button className="delete-button" onClick={() => handleDeleteTodo(index)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList