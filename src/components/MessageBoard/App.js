//api server https://github.com/Lidemy/lidemy-student-json-api-server
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const API_ENDPOINT = 'https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc'

const Page = styled.div `
  width: 300px;
  margin: 0 auto;
`

const Title = styled.h1 `
  color: #333;
`

const MessageForm = styled.form `
  margin-top: 20px;
`

const MessageTextArea = styled.textarea `
  display: block;
  width: 300px;
  margin-top: 16px;
`

const MessageInput = styled.input `
  width: 300px
`

const SubmitButton = styled.button `
  margin-top: 8px;
`

const MessageList = styled.div `
  margin-top: 16px;
`

const MessageContainer = styled.div `
  border: 1px solid black;
  padding: 5px 16px;
  border-radius: 5px;
  &:not(:first-child) {
    margin-top: 10px
  }
`

const MessageHead = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4px;
  border-bottom: 1px solid rgba(0,0,0,0.3)
`

const MessageAuthor = styled.div `
  color: reg(55,55,55,0.3)
  font-size: 14px;
`

const MessageTime = styled.div ``

const MessageBody = styled.div `
  font-size: 16px;
  margin-top:16px;
`

const ErrorMessage = styled.div `
  margin-top: 16px;
  color: red;
`

const Loading = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Message({ author, time, children }) {
  return (
    <MessageContainer>
      <MessageHead>
        <MessageAuthor>{author}</MessageAuthor>
        <MessageTime>{time}</MessageTime>
      </MessageHead>
      <MessageBody>
        {children}
      </MessageBody>
    </MessageContainer>
  )
}

Message.propTypes = {
  author: PropTypes.string,
  time: PropTypes.string,
  children: PropTypes.node
}

function App() {
  const [messages, setMessages] = useState(null)
  const [messageApiError, setmessageApiError] = useState(null)
  const [value, setValue] = useState({
    nickname: "",
    content: ""
  })
  const [postMessageError, SetPostMessageError] = useState(null)
  const [isLoadingPostMessage, setIsLoadingPostMessage] = useState(false)

  useEffect(() => {
    fetchMessages()} , [])

  const fetchMessages = () => {
    return fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(data => {
      setMessages(data)
    })
    .catch(err => {
      setmessageApiError(err.message)
    })
  }

  const handleTextareaFocus = () => {
    SetPostMessageError(null)
  }

  const handleFormsSubmit = (event) => {
    event.preventDefault()
    console.log(isLoadingPostMessage)
    if(isLoadingPostMessage) {
      return
    }
    setIsLoadingPostMessage(true)
    fetch('https://student-json-api.lidemy.me/comments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        nickname: value.nickname,
        body: value.content
      })
    })
    .then(res => res.json())
    .then(data => {
      setIsLoadingPostMessage(false)
      if(data.ok === 0) {
        SetPostMessageError(data.message)
        return
      }
      setValue('')
      fetchMessages()
    })
    .catch(error => {
      setIsLoadingPostMessage(false)
      SetPostMessageError(error.message)
    })
  }

  const handleValueChange = (event) => {
    const target = event.target
    const content = target.value
    const name = target.name
    const newValue = Object.assign({}, value)
    newValue[name] = content
    console.log()
    setValue(newValue)
  }

  return (
    <Page>
      <Title>留言板</Title>
      {isLoadingPostMessage && <Loading>Loading...</Loading>}
      <MessageForm onSubmit={(event) => handleFormsSubmit(event)}>
        <MessageInput name="nickname" onChange={(event) => handleValueChange(event)} value={value.nickname}/>
        <MessageTextArea 
          rows={5} 
          value={value.content} 
          onChange={(event) => handleValueChange(event)} name="content" 
          onFocus={handleTextareaFocus}
        />
        <SubmitButton>submit</SubmitButton>
        {postMessageError && <ErrorMessage>{postMessageError}</ErrorMessage>}
      </MessageForm>
      {messageApiError && (
          <ErrorMessage>
            something went wrong. {messageApiError.toString()}
          </ErrorMessage>
        )}
      <MessageList>
        {messages && messages.length === 0 && <div>No Message</div>}
        {messages && messages.map(message => (
          <Message key={message.id} author={message.nickname} time={new Date(message.createdAt).toLocaleString()} >{message.body}</Message>
        ))}
      </MessageList>
    </Page>
  )
}

export default App;