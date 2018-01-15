import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import RegisterForm from './modules/form.js';
import ListTable from "./modules/list.js"
import MenuNav from "./components/nav/routing.js"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


class App extends Component {  

  render() {
    const componentHTML =      
          <Router>
            <div id="layout">
                <MenuNav/>
                <div className="content">
                  <div id="main">
                    <div className="header">
                        <h1>Cadastro de Autores</h1>
                        <div className="content" id="content">
                            <Switch>
                              <Route path="/cadastro" component={RegisterForm}/>
                              <Route path="/lista" component={ListTable}/>
                            </Switch>
                        </div>
                    </div>
                  </div> 
                </div>
            </div>
          </Router>;
    return (
      componentHTML
    );
  }
}

export default App;
