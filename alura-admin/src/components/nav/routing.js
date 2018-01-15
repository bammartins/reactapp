import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';



const MenuNav = () => { 
     return (
        <div id="menu">
            <div className="pure-menu">
                <span className="pure-menu-heading">React</span>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><Link to="/cadastro">Cadastro</Link></li>
                    <li className="pure-menu-item"><Link to="/lista">Lista</Link></li>
                </ul>
            </div>
        </div>
     );
}
export default MenuNav;