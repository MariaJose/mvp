import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../memes/memes.module.css'

const Memes = ({onClick}) => {
  return (
    <button className={styles.memeButton} onClick={onClick}>
      <img  className={styles.memeImage} src="http://freevector.co/wp-content/uploads/2013/08/17332-emoticon-with-sad-face1.png"></img>
    </button>
  )
}

export default  Memes;


// https://static.thenounproject.com/png/1154070-200.png
