import { FaTimes } from 'react-icons/fa'

const TodoItem = ({ todo, onDelete, onToggle }) => {
    // const onItemClick = (e,id)=>{
    //     e.
    // }
    return (
        <li id={todo.id} key={todo.id}
            onDoubleClick={(e) => 
                onToggle(todo.id)
            }
            className={`list-group-item ${todo.complete ? "active" : ""}`}>
            {todo.item}
            <FaTimes onClick={() => onDelete(todo.id)} />
        </li>
    )
}

export default TodoItem
