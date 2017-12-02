import React from 'react';
import svg from './unsplash.svg';

export default function Logo() {
    return <img style={{ 
        position:'relative',
        top: '-1px',
        width: '12px',
        verticalAlign: 'middle'
    }} alt="Unsplash camera" src={svg} />;
}
