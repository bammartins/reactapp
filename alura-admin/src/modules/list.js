import React, { Component } from 'react';
import * as api from '../service/RestApi.js';

export default class ListTable extends Component{
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
