import React from 'react'; 
import './CodeOn.css';
import codeOn from './code-on.jpg';
import marker from './marker.svg';
import UnsplashCredit from '../UnsplashCredit';

export default function CodeOn() {
    return (
        <div className="CodeOn" style={{
            background: `url(${codeOn}) no-repeat`,
            backgroundSize: 'auto 106%',
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
            <div className="CodeOn--credit">
                <UnsplashCredit 
                    name="Blake Connelly" 
                    hyperlink="https://unsplash.com/@blakeconnally?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" />
            </div>
        </div>
    );
}
