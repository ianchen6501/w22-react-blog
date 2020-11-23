import React from "react"
import TodoItemC from './todoItem'
import useTodos from './useTodos'

function App() {
  const {
    todos, 
    handleToggleIsDone,
    handleButtonClick,
    handleDeleteTodo,
    value,
    handleChange,
  } = useTodos()



  return (
    <div className="App">
      <input type="text" placeholder="todo" value={value} onChange={handleChange}></input>
      <button onClick={handleButtonClick}>Add todo</button>
      {
        todos.map(todo => <TodoItemC size="XL" key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleIsDone={handleToggleIsDone}></TodoItemC>)
      }
    </div>
  )
}

export default App;