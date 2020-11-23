import { useState, useEffect, useRef, useCallback } from "react"

function writeTodosToLocalStorage(todos) {
  window.localStorage.setItem('todos', JSON.stringify(todos))
}

export default function useTodos() {
  const [value, setValue] = useState("")
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const id = useRef(1) //use ref 不會造成 re-render
  //拿 localstorage 的資料
  const [todos, setTodos] = useState(() => { //useState 只會在第一次載入的時候執行，就是 lazy initializer
    console.log('init')
    let todoData = window.localStorage.getItem('todos') //locallstorage 只能存 string
    if(todoData){
      todoData = JSON.parse(todoData)
      id.current = todoData[todoData.length-1].id + 1
    } else {
      todoData = []
    }
    return todoData
  }) 

  const handleToggleIsDone = id => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) {return todo}
      return {
        ...todo, 
        isDone: !todo.isDone}
    }))
  }

  useEffect(() => {
    console.log('mount') //第一次 render 時(mount)會執行
    return () => {
      console.log('unmount') // unmount 時會執行
    }
  }, [])

  useEffect(() => {
    writeTodosToLocalStorage(todos)
    //console.log("useEffect:", JSON.stringify(todos))

    //clean up function 在這個 effect 結束前要執行的任務
    //return () => {
      //console.log("clean up:", JSON.stringify(todos))
    //}
  }, [todos])  //後面加上一個 array 參數就可以指定說在該參數變動時才執行，所以現在就是限定 todos 變動時才 useState

  const handleButtonClick = useCallback(() => { //useCallback 會在
    console.log(value)
    setTodos([...todos, {
      id: id.current,
      content: value
    }]);
    id.current++
    setValue('')
  }, [todos, setTodos, value]) //[] dependancy array，當 array 改變時就 re-render

  function handleDeleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return {
    todos, 
    setTodos,
    id,
    handleToggleIsDone,
    handleButtonClick,
    handleDeleteTodo,
    value,
    setValue,
    handleChange,
  }
}