import React,{useState} from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState ([]);
  const handleNewSubmit = (event) =>{
    event.preventDefault();
    if (newTodo.length === 0){
      return;
    }
    const todoItem = {
      text: newTodo,
      complete: false
    }
    setTodos([...todos,todoItem])
    setNewTodo('');
};

const handleDelete = (delIdx) =>{
  const fliteredTodos = todos.filter((todo,i) => {
    return i !== delIdx;
  });
  setTodos(fliteredTodos);
}
const handleToggleComplete = (idx)=>{
  const updatedTodos = todos.map((todo,i) =>{
    if (idx === i){
      todo.complete = !todo.complete;
    }
    return todo;
  });
  setTodos(updatedTodos);
}


  return (
    <div className="App">
      <div className='container'>
      <h1>MAKE A TO-DO LIST</h1>
      <form onSubmit={(event) => {handleNewSubmit (event);}}>
        <input onChange={(event) => {
          setNewTodo(event.target.value)
        }} type="text" value={newTodo}/>
        <div>
          <button className='btn'>ADD A TO-DO</button>
        </div>
      </form>
      {todos.map((todo,i) => {
        return <Todo
        key={i} 
        todo={todo} 
        handleToggleComplete= {handleToggleComplete} 
        handleDelete={handleDelete}
        i={i}/>;
        
      })}
        
      </div>
      <footer className="foot">Coded and Created by Ian Page 2022</footer>
    </div>
  );
}

export default App;
