import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import styled, { ThemeProvider } from "styled-components"; //一個 <ThemeProvider>的外層 Component 來實踐換網站主題設計的系統

const theme = {
  colors : {
    light_gray : '#D0D0D0',
    black : '#d40202',
  }
}

function initFacebookSdk() {
  return new Promise(resolve => {
    console.log('init')
    //初始化
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '382475983013781',
        cookie     : true,
        xfbml      : true,
        version    : 'v9.0'
      });
      //記錄用戶行為資料 可在後台查看用戶資訊
      window.FB.AppEvents.logPageView();   
        
    };
    //嵌入臉書sdk
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  })
}

const startApp = () => {
  console.log('getStatus')
  window.FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    window.FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });

  }
  
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      // testAPI();
      window.FB.api('/me',{fields: 'id,name,email'}, function (response) {
        console.log(response)})
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
      window.FB.login(function (response) {
        if (response.authResponse) {
          window.FB.api('/me',{fields: 'id,name,email'}, function (response) {
            console.log(response)
            //這邊就可以判斷取得資料跟網站使用者資料是否一致
          });
        }
      //FB.login()預設只會回傳基本的授權資料
      //如果想取得額外的授權資料需要另外設定在scope參數裡面
      //可以設定的授權資料可以參考官方文件          
      }, {scope : 'public_profile,email'});
    }
  }
}

initFacebookSdk()



ReactDOM.render(
  <ThemeProvider theme={theme}>
      <App />
      <button onClick={() => startApp()}>登入</button>
      <div id={'status'}></div>
  </ThemeProvider>,
  document.getElementById('root')
);
