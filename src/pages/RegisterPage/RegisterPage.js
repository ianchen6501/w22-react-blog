import React, { useState, useContext } from "react"
import styled from "styled-components"
import { register, getMe } from '../../WebAPI'
import { setAuthToken } from '../../utils'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../contexts'

const ErrorMessage = styled.div `
  color: red;
  margin-top: 20px;
`

const Container = styled.div `
  position: relative;
  left: 50%;
  transform: translate(-50%,0px);
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background: white;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  border: solid 0.5px rgb(0,0,0,0.2);
`

const InputContainer = styled.div `
  padding-top: 10px;
  padding-bottom: 10px;
`

const Button = styled.button `
  padding: 6px 10px;
  border: none;
  border-radius: 2px;
  background: rgb(0,0,0,0.15);
  font-size: 20px;
  position: relative;
  left: 50%;
  transform: translate(-50%,0px);
  margin-top:10px;
`

export default function LoginPage() {
  const { setUser } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [errorMessage, setErrormessage] = useState('')
  const history = useHistory()

  const handleSubmit = (event) => {
    setErrormessage(null)
    event.preventDefault()
    register(username, password, nickname)
    .then(data => {
      if(data.ok === 0) {
        return setErrormessage(data.message)
      }
      setAuthToken(data.token)
      getMe().then(response => {
        if (response.ok !== 1) {
          setAuthToken(null)
          return setErrormessage(response.toString())
        }
        setUser(response.data)
        history.push('/')
      })
    })
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          username:{" "}
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </InputContainer>
        <InputContainer>
          password:{" "}
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </InputContainer>
        <InputContainer>
          nickname:{" "}
          <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)}></input>
        </InputContainer>
        <Button>註冊</Button>
      </form>
      { errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }
    </Container>
  )
}