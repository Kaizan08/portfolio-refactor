import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class References extends Component {
    render() {
        return (
            <div className="portfolio">
                <div className="references">
                    <span>Name: Phil Jackson</span><br/>
                    <span>Thanks for the rings MJ</span><br/>
                    <Link to="pj@aol.com">Email me</Link>
                </div>
                <div className="references">
                    <span>Name: Kobe Bryant</span><br/>
                    <span>This guy is unbeatable</span><br/>
                    <Link to="KB@aol.com">Email me</Link>
                </div>
                <div className="references">
                    <span>Name: Luc Longley</span><br/>
                    <span>Somehow he made me relevant</span><br/>
                    <Link to="ll@aol.com">Email me</Link>
                </div>
            </div>
        );
    }
}

export default References;