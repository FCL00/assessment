// import useState
import React, { useState } from 'react';
// use css module
import styles from './Form.module.css';
// import the function that will check if the user input is prime or not
import checkPrime from '@/utils/prime';
// import the function that will return the factorial of the given number
import calcFactorial from '@/utils/factor';

// form component
const Form = () => {

  // use to track user input
  const [userInput, setUserInput] = useState('');

  // use to display message for prime or non-prime numbers
  const [isPrime, setPrime] = useState('');

  // use to display the factorial of the given number
  const [factorial, setFactorial] = useState('');

  // handles user input and check if the number is a prime of not
  const onChangeHandler = (event) => {
    const value = event.target.value;
    setUserInput(value);
    // Convert string input into a number
    const num = parseInt(value);
    // Check if the user input is a number
    if (!isNaN(num)) {
      // check if the user input is a prime or not then set the message accordingly
      setPrime(checkPrime(num) ? `${num} is prime number :)` : `${num} is not a prime number :(`);
      // calculate the factorial of user input
      setFactorial(calcFactorial(num));
    } else {
      // set the message to none, if there is no user input
      setPrime('');
      setFactorial('');
    }
  };

  // clear input fields
  const reset = () => {
    setUserInput('');
    setPrime('');
    setFactorial('');
  }

  return (
    <>
      
      <form className={styles['form-container']} onSubmit={(e) => e.preventDefault()}> 
        <label className={styles['form-label']} htmlFor="user">Input a number</label>
        <input className={styles['form-input']} type="number" id="user" name="user" value={userInput} onChange={onChangeHandler} />

        <label  className={styles['form-label']} htmlFor="prime">Is it prime?</label>
        <input className={styles['form-input']} type="text" id="prime" name="prime" readOnly value={isPrime} />

        <label className={styles['form-label']} htmlFor="factor">Factorial of the given number</label>
        <input className={styles['form-input']} type="text" id="factor" name="factor" readOnly value={factorial} />
        <button className={styles['form-button']} type='reset' onClick={reset}>Reset</button>
      </form>
    </>
  );
};

export default Form;
