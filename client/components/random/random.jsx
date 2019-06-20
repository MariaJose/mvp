import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../random/random.module.css'

const Random = ({onClick}) => {
  return (
    <button className={styles.buttonRandom} onClick={onClick}>
      <img className={styles.random}src="http://freevector.co/wp-content/uploads/2012/10/56691-random-circular-button.png"></img>
    </button>
  )
}

export default  Random;