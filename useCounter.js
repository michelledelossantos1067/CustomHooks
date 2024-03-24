/* eslint-disable no-unused-vars */
import { useState } from "react"

export const useCounter = (inicialValue = 10) => {
 const [counter, setCounter]= useState(inicialValue)
 
const increment = (value = 1) => {
    setCounter(counter + value);
}
const incrementReset = () => {
    setCounter(inicialValue);
}
const decrement = (value = 1) => {
    if(counter === 0)return;
    setCounter(counter - value);
}
    return {
   counter,
   increment,
   incrementReset,
   decrement,
}
  
}
