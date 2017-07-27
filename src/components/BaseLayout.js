import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/App.css';

class BaseLayout extends Component {
    render() {
        let activeStyle={
            color: "blue",
            border: "white 1px solid"
        }
        return (
            <div>
                <nav className="App-header" >
                    <NavLink activeClassName="selected" activeStyle={activeStyle} exact to="/">
                    <img className="App-logo" src="../favicon.ico" alt="react"/></NavLink>
                    <ul className="nav navbar-nav unl">
                        <li>
                            <NavLink activeClassName="selected" activeStyle={activeStyle} className="Links" to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" activeStyle={activeStyle} className="Links" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" activeStyle={activeStyle} className="Links" to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" activeStyle={activeStyle} className="Links" to="/references">References</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" activeStyle={activeStyle} className="Links" to="/contacts">Contact Me</NavLink>
                        </li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

export default BaseLayout;