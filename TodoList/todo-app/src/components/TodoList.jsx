import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ( { todoList, onToggle, onDelete, onUpdate } ) => {

    return (
        <ul className="todoList">
            {todoList.map( (todo) => (
                <TodoItem 
                    key={todo.no}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </ul>
    )
}

export default TodoList