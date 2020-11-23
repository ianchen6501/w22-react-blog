import React, { useContext } from "react"
import styled from "styled-components"
import {
  Link,
  useLocation
} from "react-router-dom";
import { AuthContext } from '../../contexts'
import { setAuthToken } from '../../utils'
import { useHistory } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const history = useHistory()
  const { user, setUser } = useContext(AuthContext)

  const handleLogout = () => {
    setAuthToken('')
    setUser(null)
    if(location.pathname !== "/") {
      history.push('/')
    }
  }

  return (
    <HeaderContainer>
      <LeftContainer>
        <Brand as={Link} to='/'>小明的部落格</Brand>
        <NavbarList>
          <Nav to='/' $active={location.pathname === '/'} >首頁</Nav>
          { user && <Nav to='/new-post' $active={location.pathname === '/new-post'}>發布文章</Nav> }
        </NavbarList>
      </LeftContainer>
      <NavbarList>
        { !user? <Nav to='/login' $active={location.pathname === '/login'}>登入</Nav> :
        <Nav onClick={handleLogout}>登出</Nav>
      }
      </NavbarList>
    </HeaderContainer>
  )
}
