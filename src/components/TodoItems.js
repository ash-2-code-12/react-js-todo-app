import './TodoItems.css';


const TodoItems = (keyObj) => {

    const checkboxId = keyObj.todo.uniqueNo;
    const todoText = keyObj.todo.text;

    const onTodoStatusChange = (todoId) => {
        keyObj.onTodoStatusChange(todoId);
    };

    const onDeleteTodo = (todoId) => {
        keyObj.onDeleteTodo(todoId);
    };


    return (
        <li className="todo-item-container d-flex flex-row">

            <input
                type="checkbox"
                className="checkbox-input"
                id={checkboxId}
                checked={keyObj.todo.isChecked}
                onChange={() => onTodoStatusChange(keyObj.todo.uniqueNo)}
            />

            <div className="label-container d-flex flex-row shadow-sm">
                <label htmlFor={checkboxId} className={`checkbox-label ${keyObj.todo.isChecked ? "checked" : ""}`}>

                    {todoText}

                </label>
                <div className="delete-icon-container" onClick={() => onDeleteTodo(keyObj.todo.uniqueNo)}>
                    <i className="far fa-trash-alt delete-icon"></i>
                </div>
            </div>
        </li>
    );

};
export { TodoItems };