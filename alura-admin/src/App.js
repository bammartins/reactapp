import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
// import * as api from './service/RestApi.js';
// import Input from './components/forms/input.js';
// import Submit from './components/forms/submit.js';
import {RegisterForm, ListTable} from './modules/form.js'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const componentHTML =      
          <div id="layout">   
              <a href="#menu" id="menuLink" className="menu-link">
                  <span></span>
              </a>

              <div id="menu">
                  <div className="pure-menu">
                      <a className="pure-menu-heading" href="javascript:void(0)">React</a>

                      <ul className="pure-menu-list">
                          <li className="pure-menu-item"><a href="javascript:void(0)" className="pure-menu-link">Home</a></li>
                          <li className="pure-menu-item"><a href="javascript:void(0)" className="pure-menu-link">Autores</a></li>
                          <li className="pure-menu-item"><a href="javascript:void(0)" className="pure-menu-link">Livros</a></li>
                      </ul>
                  </div>
              </div>
              <div className="content">
                <div id="main">
                  <div className="header">
                    <h1>Cadastro de Autores</h1>
                  </div>
                  <div className="content" id="content">

                    <RegisterForm/>
                    <ListTable/>

                  </div>
                </div> 
              </div>
          </div>;
    return (
      componentHTML
    );
  }
}

export default App;
