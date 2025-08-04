import React, { useState, useEffect } from "react";
import axios from "axios";

// Backend API base URL
const API_URL = "http://localhost:5000/api/todos";

function TodoAxios() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");


    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const res = await axios.get(API_URL);
            setTodos(res.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    // POST request to add a todo
    const addTodo = async () => {
        if (!text.trim()) return;

        try {
            const res = await axios.post(API_URL, { text });
            setTodos([...todos, res.data]);
            setText("");
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    // DELETE request to remove a todo
    const deleteTodo = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setTodos(todos.filter((todo) => todo._id !== id)); // Remove from UI
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    return (
        <div style={{ margin: "20px" }}>
            {/* Input for new todo */}
            <input
                type="text"
                placeholder="Add a todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>

            {/* Todo List */}
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>
                        {todo.text}
                        <button onClick={() => deleteTodo(todo._id)} style={{ marginLeft: "10px" }}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoAxios;
