import React from 'react';
import styles from './square.block.css'

const Square = ({ picture, number, color }) => {
    let evenNumbers = number * 2;
    let word = `Number: ${evenNumbers}`
    return (
        <div className={styles.test}class='test'>
            <h1>{word}</h1>
            <img src={picture} alt=""></img>
        </div>
    );
}

export default Square;