import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReduce/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
// const inicialState = [];

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (todo) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }
    return{
        todos,
        todoCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
    }
}
