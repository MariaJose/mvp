import React from 'react';
import ReactDOM from 'react-dom';
import styles from './joke.module.css'

const Joke = ({onClick}) => {
  return (
    <button className={styles.memeButton} onClick={onClick}>
      <img  className={styles.memeImage} src="http://freevector.co/wp-content/uploads/2013/08/17332-emoticon-with-sad-face1.png"></img>
    </button>
  )
}

export default  Joke;


// https://static.thenounproject.com/png/1154070-200.png
