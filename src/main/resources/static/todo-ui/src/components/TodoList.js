import TodoItem from './TodoItem'
const TodoList = ({todoItems, onDelete, onToggle}) => {

    const toggleCompletion=(e)=>{
        console.log(e)
    }
    return (
        <ul className="list-group">
            {todoItems.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete}/>
            ))}
        </ul>
    )
}

export default TodoList
