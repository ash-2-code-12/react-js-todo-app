import './App.css';
import { Navbar } from './components/Navbar';
import { TodoListSection } from './components/TodoListSection';
function App() {


  return (

    <div className='main-bg'>

      <Navbar className="row" />
      <div className='p-4 pt-2'>

        <TodoListSection className="row" />

      </div>

    </div>

  )

}

export default App;