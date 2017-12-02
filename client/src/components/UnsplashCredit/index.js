import React from 'react';
import UnsplashCamera from './UnsplashCamera';

export default function UnsplashCredit({ name, hyperlink }) {
    return (
        <a 
            style={{
                backgroundColor: '#000',
                color: '#fff',
                textDecoration: 'none',
                padding: '4px 6px',
                fontFamily: '-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif',
                fontSize: '12px',
                fontWeight: 'bold',
                lineHeight: '1.2',
                display: 'inline-block',
                borderRadius: '3px',
            }}
            href={hyperlink} 
            target="_blank" 
            rel="noopener noreferrer" 
            title={`Download free do whatever you want high-resolution photos from ${name}`}>
            <UnsplashCamera />
            <span style={{
                display: 'inline-block',
                padding: '2px 3px',
            }}>
                {name}
            </span>
        </a>
    );
}
