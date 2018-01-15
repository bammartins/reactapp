import React, { Component } from 'react';
import * as api from '../service/RestApi.js';
import Input from '../components/forms/input.js';
import Submit from '../components/forms/submit.js';

export default class RegisterForm extends Component{
    constructor(props){
        super(props);

        this.setAuthor = this.setAuthor.bind(this);

        this.state = {
            value: '',
            nome : '',
            email : '',
            pass : ''
        };

        
    }

    async setAuthor (e){
        e.preventDefault();
        const setResponse = await api.setAuthor(this.state.nome, this.state.email, this.state.pass);
            if(setResponse.status === 201){
                window.location.pathname = "/lista";
            }
    }

    handleChange(fieldName) {
        return function (event){
            this.setState({[fieldName]: event.target.value});        
        }
    }

    render(){
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned">
                    <Input 
                         name="nome"
                         label="Nome"
                         id="nome"
                         type="text"
                         value={this.state.nome}
                         handleChange={this.handleChange('nome').bind(this)}
                    />
                    <Input 
                        name="email" 
                        label="Email"
                        id="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange('email').bind(this)}
                     />

                    <Input
                        name="senha"
                        label="Senha"
                        id="senha"
                        type="password"
                        value={this.state.pass}
                        handleChange={this.handleChange('pass').bind(this)}
                    />

                    <Submit className="pure-button pure-button-primary" onClick={this.setAuthor} value="Cadastrar"/>
                </form> 
            </div> 
        );
    }
}





                 