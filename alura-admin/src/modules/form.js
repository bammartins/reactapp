import React, { Component } from 'react';
import * as api from '../service/RestApi.js';
import Input from '../components/forms/input.js';
import Submit from '../components/forms/submit.js';

export class RegisterForm extends Component{
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
                // let a = new ListTable();
                // a.getAll(); 
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

export class ListTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            authorList : []
        }

        this.getAll = this.getAll.bind(this);

        this.getAll();
    }
    
   async getAll (){
        const getAllRegister = await api.getAuthor();
        const arr = [];
        let result;

        if (getAllRegister.status === 200){
            result = getAllRegister.data.results
            console.log(result);
            result.forEach((item) => {
                arr.push(item)
        });
            this.setState({authorList : arr});
        }
    }

    render(){
        return(
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
                    this.state.authorList.map((author) => {                            
                        return(
                        <tr key={author.objectId}>
                            <td>{author.name}</td>
                            <td>{author.email}</td>
                        </tr>
                        )
                    })
                    }
                </tbody>
                </table> 
            </div>
        );
    }
}


                 