(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{109:function(e,t,a){e.exports={TitleRegister:"RegisterView_TitleRegister__9rPDr",FormRegister:"RegisterView_FormRegister__3RgnX",InputRegister:"RegisterView_InputRegister__NfPGC",BtnRegistet:"RegisterView_BtnRegistet__3yjiU"}},118:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(3),s=a(36),i=a(37),r=a(39),l=a(38),c=a(0),o=a(10),u=a(26),h=a(109),p=a.n(h),g=a(1),b=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:""},e.handleChange=function(t){var a=t.target,s=a.name,i=a.value;e.setState(Object(n.a)({},s,i))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:p.a.TitleRegister,children:"SIGN UP"}),Object(g.jsxs)("form",{className:p.a.FormRegister,onSubmit:this.handleSubmit,style:p.a.form,autoComplete:"on",children:[Object(g.jsx)("label",{style:p.a.label,children:Object(g.jsx)("input",{className:p.a.InputRegister,type:"text",name:"name",placeholder:"Name",value:t,onChange:this.handleChange})}),Object(g.jsx)("label",{style:p.a.label,children:Object(g.jsx)("input",{className:p.a.InputRegister,type:"email",name:"email",placeholder:"Email",value:a,onChange:this.handleChange})}),Object(g.jsx)("label",{style:p.a.label,children:Object(g.jsx)("input",{className:p.a.InputRegister,type:"password",name:"password",placeholder:"Password",value:n,onChange:this.handleChange})}),Object(g.jsx)("button",{className:p.a.BtnRegistet,type:"submit",children:"Sing Up"})]})]})}}]),a}(c.Component),m=Object(o.b)(null,(function(e){return{onRegister:function(t){return e(u.a.register(t))}}}))(b)}}]);
//# sourceMappingURL=6.fee560f8.chunk.js.map