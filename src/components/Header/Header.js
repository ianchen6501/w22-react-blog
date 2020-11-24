import React, { useContext } from "react"
import styled from "styled-components"
import {
  Link,
  useLocation
} from "react-router-dom";
import { AuthContext } from '../../contexts'
import { setAuthToken } from '../../utils'
import { useHistory } from 'react-router-dom'

const HeaderContainer =styled.div `
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  border-bottom: solid 0.1px rgb(0,0,0,0.2);
  padding: 0px, 30px;
  background: white;
  box-shadow: 0.2px 0.2px 0.3px;
`

const Brand = styled.div `
  margin-left: 20px;
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;
  color: black;
`

const NavbarList = styled.div `
  display: flex;
  align-items: center;
`

const Nav = styled(Link) ` 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  box-sizing: border-box;
  width: 100px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  transition: font-size 0.3s;

  &:hover {
    font-size:18px
  }

  ${(props) => 
    props.$active && `background: rgb(0,0,0,0.2)`
  }
`

const LeftContainer = styled.div `
  display: flex;
  align-items: center;

  ${NavbarList} {
    margin-left: 32px;
  }
`

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
        <Brand as={Link} to='/'>大家的部落格</Brand>
        <NavbarList>
          <Nav to='/' $active={location.pathname === '/'} >首頁</Nav>
          <Nav to='/about' $active={location.pathname === '/about'} >關於</Nav>
          { user && <Nav to='/new-post' $active={location.pathname === '/new-post'}>發布文章</Nav> }
        </NavbarList>
      </LeftContainer>
      <NavbarList>
        { !user && <Nav to='/login' $active={location.pathname === '/login'}>登入</Nav> }
        { !user && <Nav to='/register' $active={location.pathname === '/register'}>註冊</Nav> }
        { user && <Nav onClick={handleLogout}>登出</Nav>}
      </NavbarList>
    </HeaderContainer>
  )
}
