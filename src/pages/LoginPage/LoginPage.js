import React, { useState, useContext } from "react"
import styled from "styled-components"
import { login, getMe } from '../../WebAPI'
import { setAuthToken } from '../../utils'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../contexts'

const ErrorMessage = styled.div `
  color: red;
`

export default function LoginPage() {
  const { setUser } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrormessage] = useState('')
  const history = useHistory()

  const handleSubmit = (event) => {
    setErrormessage(null)
    event.preventDefault()
    login(username, password).then(data => {
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
    <form onSubmit={handleSubmit}>
      <div>
        username:{" "}
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
      </div>
      <div>
        password:{" "}
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      </div>
      <button>登入</button>
      { errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }
    </form>
  )
}