import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Contacts extends Component {
    render() {
        return (
            <div className="portfolio">
                <span>Contact me bro!</span>
                <Link to="mj@aol.com">E-mail</Link>
                <Link to="www.facebook.com/mj">Facebook</Link>
                <Link to="github.com/mj">Github</Link>
                <Link to="">(555) 555-5555</Link>
            </div>
        );
    }
}

export default Contacts;