import React from 'react';
// import './square.styles.css'
import image from '../../images/image-1.jpg'

const Square = ({ picture }) => {
    return (
        <div style={{
            backgroundColor: 'yellow',
            width: '15%',
            height: '200px'
            
        }}>
            <img src={picture} alt=""></img>
        </div>
    );
}

export default Square;