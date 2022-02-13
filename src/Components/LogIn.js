import React, { Component } from 'react';



export default class LogIn extends Component {
  render() {
    return (
        <div className="login-page">
            <div className="login-form-cont">
                <form className="login-form">
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                </form>
            </div>
        </div> 
    )
  }
}