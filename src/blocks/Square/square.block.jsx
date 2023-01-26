import React from 'react';
// import './square.styles.css'

const Square = ({ picture, number }) => {
    let evenNumbers = number * 2;
    return (
        <div style={{
            backgroundColor: 'yellow',
            width: '15%',
            height: '200px'
            
        }}>
            <h1>{evenNumbers}</h1>
            <img src={picture} alt=""></img>
        </div>
    );
}

export default Square;