import './App.css';
import styled from 'styled-components';
import {MEDIA_QUERY_MD, MEDIA_QUERY_LG} from './constants/breakpoints'
import React from 'react'
import PropTypes from 'prop-types'


const TodoItemWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px gray;
`
const TodoContent = styled.div `
  font-size: 50px;

  ${props => props.size === 'XL' && `font-size: 80px`}; //短路運算子

  ${props => props.isDone && `text-decoration: line-through`};
`
const TodoButtonWrapper = styled.div ``

const Button = styled.button `
  padding: 10px;
  font-size: 20px;
  color: black
  display: flax;
  align-items: center;

  &, & + & { 
    margin-right: 20px;
  }

  &:hover {
    color: blue;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 12px
  }

  ${MEDIA_QUERY_LG} {
    font-size: 16px
  }
`

const RedButton = styled(Button)` //restyle
  color: ${props => props.theme.colors.red_300};
`

export default function TodoItem({
    //size, 
    todo, 
    handleDeleteTodo, 
    handleToggleIsDone
  }) {
  const handleTogglersClick = () => {
    return handleToggleIsDone(todo.id)
  }
  const handleDeleteClick = () => {
    return handleDeleteTodo(todo.id)
  }

  return (
    <TodoItemWrapper data-todo-id={todo.id}>
      <TodoContent $id="abc" isDone={todo.isDone} dangerouslySetInnerHTML={{__html: todo.content,}}></TodoContent>
      <TodoButtonWrapper>
        <Button onClick={handleDeleteClick}>刪除</Button>
        <RedButton onClick={handleTogglersClick}>
          {todo.isDone && "已完成"}
          {!todo.isDone && "未完成"}
        </RedButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  )
}


TodoItem.propTypes = { //這邊記得 propsTypes 是小寫
  //className: PropTypes.string.isRequired, //isrequired 必定要填
  size: PropTypes.string.isRequired, 
  todo: PropTypes.shape ({
    id: PropTypes.number,
    content: PropTypes.string,
    isDone: PropTypes.bool
  }), 
  handleDeleteTodo: PropTypes.func, 
  handleToggleIsDone: PropTypes.func,

}