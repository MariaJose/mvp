import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../motivational/motivational.module.css'

const Motivational = ({onClick}) => {
  return (
    <>
    <button className={styles.buttonmotivational} onClick={onClick}>
       <img className={styles.motivational} src="http://freevector.co/wp-content/uploads/2014/08/55689-sad-face-black-symbol.png"/>
    </button>
    </>
  )
}

export default Motivational;