import React from 'react';
// import './square.styles.css'

const Square = ({ picture, number }) => {
    let evenNumbers = number * 2;
    let word = `Number: ${evenNumbers}`
    return (
        <div style={{
            backgroundColor: 'yellow',
            width: '15%',
            height: '200px'
            
        }}>
            <h1>{word}</h1>
            <img src={picture} alt=""></img>
        </div>
    );
}

export default Square;