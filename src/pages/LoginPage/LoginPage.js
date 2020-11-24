import React, { useState, useContext } from "react"
import styled from "styled-components"
import { login, getMe } from '../../WebAPI'
import { setAuthToken } from '../../utils'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../contexts'

const ErrorMessage = styled.div `
  color: red;
`

const Container = styled.div `
  position: relative;
  left: 50%;
  transform: translate(-50%,0px);
  width: 30vw;
  display: flex;
  justify-content: center;
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
  return (
    <Container>Loading</Container>
  )
}