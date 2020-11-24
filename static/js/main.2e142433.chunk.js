(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{47:function(n,t,e){},69:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e(36),o=e.n(i),a=(e(47),e(4)),u=e(3),s=e(2),b=e(9),j=e(5),d=e(24),l="token",f=function(n){localStorage.setItem(l,n)},p=function(){return localStorage.getItem(l)},x="https://student-json-api.lidemy.me",h=function(){var n=p();return fetch("".concat(x,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))};function O(){var n=Object(u.a)(["\n  position: relative;\n  width: 100%;\n  top: 30vh;\n  text-align: center;\n  font-size: 40px;\n  color: rgb(0,0,0,0.1)\n  font-scale: bold;\n"]);return O=function(){return n},n}function g(){var n=Object(u.a)(["\n  display: flex;\n"]);return g=function(){return n},n}function v(){var n=Object(u.a)(["\n  padding: 10px;\n  margin-left: 20px;\n  border: none;\n"]);return v=function(){return n},n}function m(){var n=Object(u.a)(["\n  font-size: 20px;\n  cursor: pointer;\n"]);return m=function(){return n},n}function y(){var n=Object(u.a)(["\n  margin: 20px auto;\n  width: 100px;\n  display: flex;\n  justify-content: space-around;\n  list-style-type: none;\n"]);return y=function(){return n},n}function w(){var n=Object(u.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]);return w=function(){return n},n}function S(){var n=Object(u.a)(["\n  font-size: 24px;\n  text-decoration: none;\n  color: #333;\n"]);return S=function(){return n},n}function k(){var n=Object(u.a)(["\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 16px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  &:hover {\n    box-shadow: 0.5px 0.5px 2px 0px ;\n  }\n"]);return k=function(){return n},n}function z(){var n=Object(u.a)(["\n  margin-top: 30px;\n  outline: solid "," 0.5px;\n"]);return z=function(){return n},n}function C(){var n=Object(u.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]);return C=function(){return n},n}var D=s.b.div(C()),P=s.b.div(z(),(function(n){return n.theme.colors.light_gray})),E=s.b.div(k()),B=Object(s.b)(b.b)(S()),I=s.b.div(w()),T=s.b.ul(y()),$=s.b.li(m()),J=s.b.button(v()),N=s.b.div(g()),_=s.b.div(O());function L(n){var t=n.post,e=n.setIsDeletingPost;function c(n){e((function(){return!0})),function(n){var t=Number(n.target.getAttribute("id")),e=p();return console.log(e),fetch("".concat(x,"/posts/").concat(t),{method:"DELETE",headers:{authorization:"Bearer ".concat(e)}}).then((function(n){return n.json()}))}(n).then((function(){e((function(){return!1}))}))}return Object(r.jsxs)(E,{children:[Object(r.jsxs)(B,{to:"/posts/".concat(t.id),children:[t.id," . ",t.title]}),Object(r.jsxs)(N,{children:[Object(r.jsx)(I,{children:new Date(t.createdAt).toLocaleDateString()}),Object(r.jsx)(J,{onClick:function(n){return c(n)},id:t.id,children:"Delete"})]})]})}function U(n){for(var t=n.pages,e=n.setPages,c=[],i=1;i<=t.totalPages;i++)c.push(i);return Object(r.jsx)(T,{children:c.map((function(n){return Object(r.jsx)($,{onClick:function(n){return function(n){e(Object(d.a)(Object(d.a)({},t),{},{currentPage:n}))}(Number(n.target.innerText))},children:n},n)}))})}function A(){var n=Object(c.useState)([]),t=Object(a.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)({}),u=Object(a.a)(o,2),s=u[0],b=u[1],j=Object(c.useState)(!1),d=Object(a.a)(j,2),l=d[0],f=d[1],p=Object(c.useState)(!1),h=Object(a.a)(p,2),O=h[0],g=h[1];return Object(c.useEffect)((function(){g(!0),fetch("".concat(x,"/posts?_sort=id&_order=desc")).then((function(n){return n.json()})).then((function(n){i(n),g(!1);var t=n.length,e=t%5?Math.floor(t/5)+1:Math.floor(t/5);b({totalPages:e,currentPage:1})}))}),[l]),Object(r.jsxs)(D,{children:[!O&&Object(r.jsx)(P,{children:function(n,t){var e=t.currentPage;return n.slice(5*(e-1),5*e)}(e,s).map((function(n){return Object(r.jsx)(L,{post:n,setIsDeletingPost:f},n.id)}))}),!O&&Object(r.jsx)(U,{pages:s,setPages:b}),O&&Object(r.jsx)(_,{children:"Loading"})]})}function M(){var n=Object(u.a)(["\n  font-size: 26px;\n  text-align: center;\n  margin-top: 80px;\n"]);return M=function(){return n},n}function F(){var n=Object(u.a)(["\n  background: rgb(0,0,0,0.1);\n  width: 100vw;\n  height: 120px;\n  text-align: center;\n  font-size: 32px;\n  vertical-align: baseline;\n  padding-top: 60px;\n"]);return F=function(){return n},n}var K=s.b.div(F()),R=s.b.div(M());function q(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(K,{children:"\u95dc\u65bc\u6211\u5011"}),Object(r.jsxs)(R,{children:["\u9019\u662f\u4e00\u500b\u5927\u5bb6\u96c6\u9ad4\u5275\u4f5c\u7684\u90e8\u843d\u683c\u3002",Object(r.jsx)("br",{}),"\u4f60\u53ef\u4ee5\u5728\u9019\u908a\u81ea\u7531\u8a3b\u518a\u3001\u767c\u6587\u4e26\u89c0\u770b\u5225\u4eba\u7684\u6587\u7ae0\u3002",Object(r.jsx)("br",{}),"enjoy writting!"]})]})}var G=Object(c.createContext)(null);function H(){var n=Object(u.a)(["\n  padding: 6px 10px;\n  border: none;\n  border-radius: 2px;\n  background: rgb(0,0,0,0.15);\n  font-size: 20px;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%,0px);\n  margin-top:10px;\n"]);return H=function(){return n},n}function Q(){var n=Object(u.a)(["\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]);return Q=function(){return n},n}function V(){var n=Object(u.a)(["\n  position: relative;\n  left: 50%;\n  transform: translate(-50%,0px);\n  width: 30vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n  background: white;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 5px;\n  border: solid 0.5px rgb(0,0,0,0.2);\n"]);return V=function(){return n},n}function W(){var n=Object(u.a)(["\n  color: red;\n  margin-top: 20px;\n"]);return W=function(){return n},n}var X=s.b.div(W()),Y=s.b.div(V()),Z=s.b.div(Q()),nn=s.b.button(H());function tn(){var n=Object(c.useContext)(G).setUser,t=Object(c.useState)(""),e=Object(a.a)(t,2),i=e[0],o=e[1],u=Object(c.useState)(""),s=Object(a.a)(u,2),b=s[0],d=s[1],l=Object(c.useState)(""),p=Object(a.a)(l,2),O=p[0],g=p[1],v=Object(j.f)();return Object(r.jsxs)(Y,{children:[Object(r.jsxs)("form",{onSubmit:function(t){g(null),t.preventDefault(),function(n,t){return fetch("".concat(x,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))}(i,b).then((function(t){if(0===t.ok)return g(t.message);f(t.token),h().then((function(t){if(1!==t.ok)return f(null),g(t.toString());n(t.data),v.push("/")}))}))},children:[Object(r.jsxs)(Z,{children:["username:"," ",Object(r.jsx)("input",{type:"text",value:i,onChange:function(n){return o(n.target.value)}})]}),Object(r.jsxs)(Z,{children:["password:"," ",Object(r.jsx)("input",{type:"password",value:b,onChange:function(n){return d(n.target.value)}})]}),Object(r.jsx)(nn,{children:"\u767b\u5165"})]}),O&&Object(r.jsx)(X,{children:O})]})}var en=e(40),rn=e(41),cn=e.n(rn);function on(){var n=Object(u.a)(["\n  color: red;\n"]);return on=function(){return n},n}function an(){var n=Object(u.a)(["\n  padding: 8px 10px;\n  border: none;\n  font-size: 20px;\n  background: rgb(0,0,0,0.5);\n  border-radius: 5px;\n  cursor: pointer;\n  color: white;\n  margin-top: 30px;\n"]);return an=function(){return n},n}function un(){var n=Object(u.a)(["\n  width: 100%;\n  height: 40px;\n  border: solid 0.1px rgb(0,0,0,0.2);\n  border-radius: 3px;\n  font-size:20px;\n"]);return un=function(){return n},n}function sn(){var n=Object(u.a)(["\n  display: block;\n  width: 90vw;\n"]);return sn=function(){return n},n}function bn(){var n=Object(u.a)(["\n  height: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  &:nth-child(3) {\n    width:100px;\n  }\n"]);return bn=function(){return n},n}var jn=s.b.div(bn()),dn=s.b.div(sn()),ln=s.b.input(un()),fn=s.b.button(an()),pn=s.b.div(on());function xn(){var n=Object(c.useState)(""),t=Object(a.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(""),u=Object(a.a)(o,2),s=u[0],b=u[1],d=Object(c.useState)(""),l=Object(a.a)(d,2),f=l[0],h=l[1],O=Object(j.f)();return Object(r.jsxs)(jn,{children:[Object(r.jsxs)(dn,{children:[Object(r.jsx)("h2",{children:"Title"}),Object(r.jsx)(ln,{value:e,onChange:function(n){i(n.target.value)}})]}),Object(r.jsxs)(dn,{children:[Object(r.jsx)("h2",{children:"Body"}),Object(r.jsx)(en.CKEditor,{editor:cn.a,value:s,onReady:function(n){console.log("Editor is ready to use!",n)},onChange:function(n,t){var e=t.getData().replace("<p>","");e=e.replace("</p>",""),b(e),console.log({event:n,editor:t,newData:e})},onBlur:function(n,t){console.log("Blur.",t)},onFocus:function(n,t){console.log("Focus.",t)}})]}),Object(r.jsx)(fn,{onClick:function(){if(""===e||""===s)return h("\u8acb\u8f38\u5165\u8cc7\u6599");(function(n,t){var e=p();return fetch("".concat(x,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))})(e,s).then((function(){O.push("/")}))},children:"Submit"}),Object(r.jsx)(pn,{children:f})]})}function hn(){var n=Object(u.a)(["\n  margin-top: 10px;\n  padding-top: 20px;\n  border-top: solid 0.5px rgb(0,0,0,0.3);\n  font-size:26px;\n"]);return hn=function(){return n},n}function On(){var n=Object(u.a)(["\n  font-size: 20px;\n  vertical-align: bottom;\n  color: rgb(0,0,0,0.6);\n"]);return On=function(){return n},n}function gn(){var n=Object(u.a)(["\n  font-weight: bold;\n  font-size: 26px;\n  vertical-align: baseline;\n"]);return gn=function(){return n},n}function vn(){var n=Object(u.a)(["\n  margin-top: 30px;\n  display: flex;\n  justify-content: space-between;\n"]);return vn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  width: 70vw;\n  margin: 0 auto;\n"]);return mn=function(){return n},n}var yn=s.b.div(mn()),wn=s.b.div(vn()),Sn=s.b.div(gn()),kn=s.b.div(On()),zn=s.b.div(hn());function Cn(){var n=Object(c.useState)({}),t=Object(a.a)(n,2),e=t[0],i=t[1],o=Object(j.h)().id;return Object(c.useEffect)((function(){(function(n){return fetch("".concat(x,"/posts?id=").concat(n)).then((function(n){return n.json()}))})(o).then((function(n){return i(n[0]),console.log(e)})).catch((function(n){return console.log(n.toString())}))}),[]),Object(r.jsxs)(yn,{children:[Object(r.jsxs)(wn,{children:[Object(r.jsx)(Sn,{children:e.title}),Object(r.jsx)(kn,{children:new Date(e.createdAt).toLocaleTimeString()})]}),Object(r.jsx)(zn,{children:e.body})]})}function Dn(){var n=Object(u.a)(["\n  padding: 6px 10px;\n  border: none;\n  border-radius: 2px;\n  background: rgb(0,0,0,0.15);\n  font-size: 20px;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%,0px);\n  margin-top:10px;\n"]);return Dn=function(){return n},n}function Pn(){var n=Object(u.a)(["\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]);return Pn=function(){return n},n}function En(){var n=Object(u.a)(["\n  position: relative;\n  left: 50%;\n  transform: translate(-50%,0px);\n  width: 30vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n  background: white;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 5px;\n  border: solid 0.5px rgb(0,0,0,0.2);\n"]);return En=function(){return n},n}function Bn(){var n=Object(u.a)(["\n  color: red;\n  margin-top: 20px;\n"]);return Bn=function(){return n},n}var In=s.b.div(Bn()),Tn=s.b.div(En()),$n=s.b.div(Pn()),Jn=s.b.button(Dn());function Nn(){var n=Object(c.useContext)(G).setUser,t=Object(c.useState)(""),e=Object(a.a)(t,2),i=e[0],o=e[1],u=Object(c.useState)(""),s=Object(a.a)(u,2),b=s[0],d=s[1],l=Object(c.useState)(""),p=Object(a.a)(l,2),O=p[0],g=p[1],v=Object(c.useState)(""),m=Object(a.a)(v,2),y=m[0],w=m[1],S=Object(j.f)();return Object(r.jsxs)(Tn,{children:[Object(r.jsxs)("form",{onSubmit:function(t){w(null),t.preventDefault(),function(n,t,e){return fetch("".concat(x,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:e,username:n,password:t})}).then((function(n){return n.json()}))}(i,b,O).then((function(t){if(0===t.ok)return w(t.message);f(t.token),h().then((function(t){if(1!==t.ok)return f(null),w(t.toString());n(t.data),S.push("/")}))}))},children:[Object(r.jsxs)($n,{children:["username:"," ",Object(r.jsx)("input",{type:"text",value:i,onChange:function(n){return o(n.target.value)}})]}),Object(r.jsxs)($n,{children:["password:"," ",Object(r.jsx)("input",{type:"password",value:b,onChange:function(n){return d(n.target.value)}})]}),Object(r.jsxs)($n,{children:["nickname:"," ",Object(r.jsx)("input",{type:"text",value:O,onChange:function(n){return g(n.target.value)}})]}),Object(r.jsx)(Jn,{children:"\u8a3b\u518a"})]}),y&&Object(r.jsx)(In,{children:y})]})}function _n(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n\n  "," {\n    margin-left: 32px;\n  }\n"]);return _n=function(){return n},n}function Ln(){var n=Object(u.a)([" \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  box-sizing: border-box;\n  width: 100px;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n  transition: font-size 0.3s;\n\n  &:hover {\n    font-size:18px\n  }\n\n  ","\n"]);return Ln=function(){return n},n}function Un(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return Un=function(){return n},n}function An(){var n=Object(u.a)(["\n  margin-left: 20px;\n  font-size: 32px;\n  font-weight: bold;\n  text-decoration: none;\n  color: black;\n"]);return An=function(){return n},n}function Mn(){var n=Object(u.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  position: fixed;\n  border-bottom: solid 0.1px rgb(0,0,0,0.2);\n  padding: 0px, 30px;\n  background: white;\n  box-shadow: 0.2px 0.2px 0.3px;\n"]);return Mn=function(){return n},n}var Fn=s.b.div(Mn()),Kn=s.b.div(An()),Rn=s.b.div(Un()),qn=Object(s.b)(b.b)(Ln(),(function(n){return n.$active&&"background: rgb(0,0,0,0.2)"})),Gn=s.b.div(_n(),Rn);function Hn(){var n=Object(j.g)(),t=Object(j.f)(),e=Object(c.useContext)(G),i=e.user,o=e.setUser;return Object(r.jsxs)(Fn,{children:[Object(r.jsxs)(Gn,{children:[Object(r.jsx)(Kn,{as:b.b,to:"/",children:"\u5927\u5bb6\u7684\u90e8\u843d\u683c"}),Object(r.jsxs)(Rn,{children:[Object(r.jsx)(qn,{to:"/",$active:"/"===n.pathname,children:"\u9996\u9801"}),Object(r.jsx)(qn,{to:"/about",$active:"/about"===n.pathname,children:"\u95dc\u65bc"}),i&&Object(r.jsx)(qn,{to:"/new-post",$active:"/new-post"===n.pathname,children:"\u767c\u5e03\u6587\u7ae0"})]})]}),Object(r.jsxs)(Rn,{children:[!i&&Object(r.jsx)(qn,{to:"/login",$active:"/login"===n.pathname,children:"\u767b\u5165"}),!i&&Object(r.jsx)(qn,{to:"/register",$active:"/register"===n.pathname,children:"\u8a3b\u518a"}),i&&Object(r.jsx)(qn,{onClick:function(){f(""),o(null),"/"!==n.pathname&&t.push("/")},children:"\u767b\u51fa"})]})]})}function Qn(){var n=Object(u.a)(["\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  height: 50px;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n"]);return Qn=function(){return n},n}function Vn(){var n=Object(u.a)(["\n  padding-top: 64px;\n  padding-bottom: 50px;\n"]);return Vn=function(){return n},n}var Wn=s.b.div(Vn()),Xn=s.b.div(Qn(),(function(n){return n.theme.colors.light_gray}));function Yn(){var n=Object(c.useState)(null),t=Object(a.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(!1),u=Object(a.a)(o,2),s=u[0],d=u[1];return Object(c.useEffect)((function(){localStorage.getItem("token")&&(d(!0),h().then((function(n){n.ok&&(i((function(){return n.data})),d(!1))})))}),[]),Object(r.jsx)(G.Provider,{value:{user:e,setUser:i},children:Object(r.jsxs)(b.a,{children:[!s&&Object(r.jsx)(Hn,{}),!s&&Object(r.jsx)(Wn,{children:Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",children:Object(r.jsx)(A,{})}),Object(r.jsx)(j.a,{path:"/about",children:Object(r.jsx)(q,{})}),Object(r.jsx)(j.a,{path:"/new-post",children:Object(r.jsx)(xn,{})}),Object(r.jsx)(j.a,{path:"/login",children:Object(r.jsx)(tn,{})}),Object(r.jsx)(j.a,{path:"/posts/:id",children:Object(r.jsx)(Cn,{})}),Object(r.jsx)(j.a,{path:"/register",children:Object(r.jsx)(Nn,{})})]})}),!s&&Object(r.jsx)(Xn,{children:"Made by Ian!"})]})})}o.a.render(Object(r.jsx)(s.a,{theme:{colors:{light_gray:"#D0D0D0"}},children:Object(r.jsx)(Yn,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.2e142433.chunk.js.map