import React from 'react';
import ReactDOM from 'react-dom';
import styles from './didYouKnow.module.css';

const DidYouKnow = ({onClick}) => {
  return (
    <button className={styles.buttonTrivia} onClick={onClick}>
      <img  className={styles.trivia} src="http://freevector.co/wp-content/uploads/2012/01/69061-intelligent-search.png"></img>
    </button>
  )
}

export default DidYouKnow;