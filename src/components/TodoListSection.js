import './TodoListSection.css';
import { TodoItems } from './TodoItems';
import { useState, useEffect } from 'react';

const TodoListSection = () => {

  const [todoList, setTodoList] = useState([]);
  const [currentDeleteId, setCurrentDeleteId] = useState(null);
  // const [todosCount, setTodosCount] = useState(0);
  const [showDelete,setShowDelete] = useState(false);
  const [todoIdGenerator, setTodoIdGenerator] = useState(0);

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
    const storedTodoIdGen = JSON.parse(localStorage.getItem('todoIdGen'));
    if (storedTodoList !== null) {
      setTodoList(storedTodoList);
      setTodoIdGenerator(parseInt(storedTodoIdGen));
    }
    else {
      setTodoList([
        { text: "Sample text 1", uniqueNo:  0, isChecked: false },
        { text: "Sample text 2", uniqueNo:  1, isChecked: true }
      ]);
      setTodoIdGenerator(2);
    }

  }, []);//initial fetch of todoList from local storage
  
  
  

  //handling input element value changes 
    const [userInputValue, setUserInputValue] = useState("");

    const onInputText = (e) => {
        setUserInputValue(e.target.value);
    }

    //onclick event handler for add Btn click
    const onAddTodo = () => {

        if (userInputValue === "") {
            return alert("Enter a Valid Text");
        }
        //update todos count
        // create new todo object
        //with text = userInput , uniqueNo = length+1 , isChecked =false
        //update todoList state
        let newTodo = {
          text: userInputValue,
          uniqueNo: todoIdGenerator+1,
          isCheked:false
        };
        setTodoIdGenerator(parseInt(todoIdGenerator)+1);
        setTodoList(todoList.concat(newTodo));
        setUserInputValue(""); //updating the value of input element

    };
  
  
  const onTodoStatusChange = (todoId) => {

    let newTodoList = [];

    for (let todo of todoList) {

      if (todo.uniqueNo === todoId) {
        newTodoList.push({
          text: todo.text,
          uniqueNo: todo.uniqueNo,
          isChecked: !todo.isChecked
        });
      } else {
        newTodoList.push(todo);
      }

    }

    setTodoList(newTodoList);

  };

  const deleteTodo=()=>{
    setShowDelete(false);
    let newTodoList = [];

    for (let todo of todoList) {
      if (todo.uniqueNo !== currentDeleteId) {
        newTodoList.push(todo);
        
      }
    }

    setTodoList(newTodoList);
  }

  const onDeleteTodo = (todoId) => {

    setShowDelete(true);
    setCurrentDeleteId(todoId);

  };

  const onSaveTodo = () => {
    let todoListJSONstring = JSON.stringify(todoList);
    let todoIdGenJSONstring = JSON.stringify(todoIdGenerator);
    localStorage.setItem('todoList', todoListJSONstring);
    localStorage.setItem('todoIdGen', todoIdGenJSONstring);

  };


  return (
    <div className="w-75 sectionSpacing mt-1">
      <div>
        <h1 className="create-task-heading">
          Create <span className="create-task-heading-subpart">Task</span>
        </h1>
        <input
          className="todo-user-input"
          placeholder="What needs to be done?"
          value={userInputValue}
          onChange={onInputText}
        />
        <button className="button" onClick={onAddTodo}>
          Add
        </button>
      </div>
      { showDelete &&
        <div className='d-flex justify-content-center'>
        <div className="shadow-lg p-3 col-3 rounded">
          <p>Are you sure you want to delete this task?</p>
          <div className="d-flex justify-content-around">
            <button onClick={deleteTodo} className="btn btn-success">Yes</button>
            <button onClick={()=>setShowDelete(false)} className="btn btn-danger">No</button>
          </div>
        </div>
      </div>}

      <h1 className="todo-items-heading">
        My <span className="todo-items-heading-subpart">Tasks</span>
      </h1>

      <ul className="todo-items-container">
        {todoList.map((todo) => (
          <TodoItems
            todo={todo}
            onTodoStatusChange={onTodoStatusChange}
            onDeleteTodo={onDeleteTodo} 
          />
        ))}
      </ul>
      <button className="button" onClick={onSaveTodo}>
        Save
      </button>
    </div>
  );

}
export { TodoListSection };