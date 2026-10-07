import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            text: 'Learn React',
            completed: false
        }
    ],
    addTodo: (todo) => {},
    toggleTodo: (id) => {},
    updateTodo: (id, newText) => {},
    deleteTodo: (id) => {}
})

export const useTodoContext = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider