import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import * as api from './service/RestApi.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authorList : [],
      value: '',
      nome : '',
      email : '',
      pass : ''
  };

    this.getAll = this.getAll.bind(this);
    this.setAuthor = this.setAuthor.bind(this);

    this.getAll();
  }

  handleChange(fieldName) {
      return function (event){
          this.setState({[fieldName]: event.target.value});        
      }
  }

  async setAuthor (e){
    e.preventDefault();
    const setResponse = await api.setAuthor(this.state.nome, this.state.email, this.state.pass);
        if(setResponse.status === 201){
          this.getAll();
        }
  }
  async getAll (){
    const getAllRegister = await api.getAuthor();
    const arr = [];
    let result;

    if (getAllRegister.status === 200){
      result = getAllRegister.data.results
      result.forEach((item) => {
        arr.push(item)
      });
        this.setState({authorList : arr});
        console.log(this.state);
    }
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
                    <div className="pure-form pure-form-aligned">
                      <form className="pure-form pure-form-aligned">
                        <div className="pure-control-group">
                          <label htmlFor="nome">Nome</label> 
                          <input id="nome" type="text" value={this.state.nome} onChange={this.handleChange('nome').bind(this)} />
                        </div>
                        <div className="pure-control-group">
                          <label htmlFor="email">Email</label> 
                          <input id="email" type="email" value={this.state.email} onChange={this.handleChange('email').bind(this)}/>
                        </div>
                        <div className="pure-control-group">
                          <label htmlFor="senha">Senha</label> 
                          <input id="senha" type="password" name="senha"  value={this.state.pass} onChange={this.handleChange('pass').bind(this)}/>
                        </div>
                        <div className="pure-control-group">                                  
                          <label></label> 
                          <input type="submit" className="pure-button pure-button-primary" onClick={this.setAuthor} value="Cadastrar"/> 
                        </div>
                      </form>             

                    </div>  
                    <div>            
                      <table className="pure-table">
                        <thead>
                          <tr>
                            <th>Nome</th>
                            <th>email</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.authorList.map((author, index) => {                            
                              return(
                                <tr key={index}>
                                  <td>{author.name}</td>
                                  <td>{author.email}</td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table> 
                    </div>             
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
