import { useState } from 'react'


const TodoForm = ({ onAddTodo }) => {
    const [todoValue, setTodoValue] = useState('')
    const [valid, setValid] = useState(true)


    const submitTodoItem = (e) => {
        e.preventDefault();
        console.log('Add button clicked')
        if(!todoValue){
            setValid(false)
            return
        }
        onAddTodo(todoValue);
        setTodoValue('')
    }
    return (
        <form noValidate className="needs-validation pb-2" onSubmit={(e) => submitTodoItem(e)} >
            <div className="row">
                <div className="col-8">
                    <input value={todoValue} placeholder="Please enter a todo item" 
                    className={
                        valid
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                    type="text" id="todoEntry" onChange={(e) =>{
                        setTodoValue(e.target.value);
                        setValid(e.target.value!=='');
                        }
                        } required />
                    <div className="invalid-feedback">
                        Please provide a valid todo item.
                    </div>
                </div>
                <div className="col-4">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    )
}



export default TodoForm
