import React from 'react';
import './square.block.css'

const Square = ({ picture, number, color }) => {
    let evenNumbers = number * 2;
    let word = `Number: ${evenNumbers}`
    return (
        <div className="test">
            <h1>{word}</h1>
            <img src={picture} alt=""></img>
        </div>
    );
}

export default Square;