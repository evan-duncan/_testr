import React from 'react'; 
import codeOnXL from '../images/code-on-2000px.jpg';
import codeOnMd from '../images/code-on-800px.jpg';
import codeOnSm from '../images/code-on-400px.jpg';
import marker from './marker.svg';

export default function CodeOn() {
    return (
        <div className="CodeOn" style={{
            background: `linear-gradient(0deg,rgba(0,100,255,0.3),rgba(0,100,255,0.3)),url(${codeOnXL})`,
            backgroundSize: 'auto 110%',
        }}>
            <div className="CodeOn--wrapper">
                <h1 className="CodeOn--hdg">What can Testr do for you?</h1>
                <ul className="CodeOn--list" style={{ listStyleImage: `url(${marker})` }}>
                    <li className="CodeOn--listItem">Selling Point for Testr 001</li>
                    <li className="CodeOn--listItem">Selling Point for Testr 002</li>
                    <li className="CodeOn--listItem">Selling Point for Testr 003</li>
                    <li className="CodeOn--listItem">Selling Point for Testr 004</li>
                    <li className="CodeOn--listItem">Selling Point for Testr 005</li>
                </ul>
            </div>
        </div>
    );
}
