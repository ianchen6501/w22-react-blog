import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import Header from '../Header'
import { AuthContext } from "../../contexts";
import { getMe } from "../../WebAPI"

const Root = styled.div `
  padding-top: 64px;
`

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if(localStorage.getItem('token')) {
      getMe().then(response => {
        if(response.ok) {
          setUser(response.data)
        }
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <Root>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"> 
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </Root>
    </AuthContext.Provider>
  )
}