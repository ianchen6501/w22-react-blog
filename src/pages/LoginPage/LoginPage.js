import React, { useState, useContext, useEffect, useLayoutEffect } from "react"
import styled from "styled-components"
import { login, getMe } from '../../WebAPI'
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
  const [errorMessage, setErrormessage] = useState('')
  const history = useHistory()

  useLayoutEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    const script = document.createElement('script')
    script.innerHTML = `
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '382475983013781',
          cookie     : true,
          xfbml      : true,
          version    : 'v9.0'
        });
          
        FB.AppEvents.logPageView();   
          
      };

      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

      // FB.getLoginStatus(function(response) {
      //   statusChangeCallback(response);
      // });

      function getLoginStatus() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
      }

      setTimeout(() => {
        getLoginStatus()
      }, 5000)
      

      // This is called with the results from from FB.getLoginStatus().
      function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          testAPI();
        } else if (response.status === 'not_authorized') {
          // The person is logged into Facebook, but not your app.
          document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
        } else {
          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.
          document.getElementById('status').innerHTML = 'Please log ' +
            'into Facebook.';
        }
      }

      // This function is called when someone finishes with the Login
      // Button.  See the onlogin handler attached to it in the sample
      // code below.
      function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
      }

      // Here we run a very simple test of the Graph API after login is
      // successful.  See statusChangeCallback() for when this call is made.
      function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          console.log('Successful login for: ' + response.name);
          document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
        });

      }

      function login() {
        FB.login(function (response) {
          /*console.log(response);*/
        });
      }
      
      function logout() {
        FB.logout(function (response) {
          /*console.log(response)*/
        });
      }
    ` 
    body.appendChild(script)
  })

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
        <Button>登入</Button>
      </form>
      { errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }
      <button onClick={() => login()}>登入</button>
      {/* <button onclick={() => logout()}>登出</button> */}
      <div id="status"></div>
    </Container>
  )
}