import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            const todoResponse = res.data
            setTodos(todoResponse);
            console.log('mounted')
        }
        )

        return (
            console.log('unmounted')
        )
    }, [])

    return(
        <div>
            {todos && todos.map(todo=>{
                const { id, userId, title } = todo;
                return(
                    <div key={id}>
                        <p>{title} ({userId})</p>
                    </div>
                )
            })
        }
        </div>
        
    )

}

export default TodoList;