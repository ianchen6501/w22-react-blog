import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from '../../pages/HomePage'
import AboutPage from '../../pages/AboutPage'
import LoginPage from '../../pages/LoginPage'
import NewPostPage from '../../pages/NewPostPage'
import SinglePostPage from '../../pages/SinglePostPage'
import RegisterPage from '../../pages/RegisterPage'
import Header from '../Header'
import { AuthContext } from "../../contexts";
import { getMe } from "../../WebAPI"

const CenterContainer = styled.div `
  padding-top: 64px;
  padding-bottom: 50px;
`

const Footer = styled.div `
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 50px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.light_gray};
`

export default function App() {
  const [user, setUser] = useState(null)
  const [isLoadinGetMe, setIsLoadinGetMe] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setIsLoadinGetMe(true)
      getMe().then(response => {
        if(response.ok) {
          setUser(() => {
            return response.data
          })
          setIsLoadinGetMe(false)
        }
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{user, setUser}}>
          <Router>
            {!isLoadinGetMe && <Header /> }
            {!isLoadinGetMe && (
              <CenterContainer>
                <Switch>
                  <Route exact path="/"> 
                    <HomePage/>
                  </Route>
                  <Route path="/about"> 
                    <AboutPage />
                  </Route>
                  <Route path="/new-post"> 
                    <NewPostPage />
                  </Route>
                  <Route path="/login">
                    <LoginPage />
                  </Route>
                  <Route path="/posts/:id">
                    <SinglePostPage />
                  </Route>
                  <Route path="/register">
                    <RegisterPage />
                  </Route>
                </Switch>
              </CenterContainer>
            )}
            {!isLoadinGetMe && <Footer>Made by Ian!</Footer> }
          </Router>
    </AuthContext.Provider>
  )
}