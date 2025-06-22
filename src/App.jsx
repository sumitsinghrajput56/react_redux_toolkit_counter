import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './redux/store'
import { counterSlice } from './features/counter/counterSlice'
import { increment,decrement,reset,incrementByAmount } from './features/counter/counterSlice'

function App() {
  const [amount,setAmount]=useState(0);

  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();

  function HandleIncrementClick()
  {
    dispatch(increment());
  }

  function HandleDecrementClick()
  {
    dispatch(decrement())
  }
  function HandleResetClick()
  {
    dispatch(reset())
  }
  function HandleIncrementByAmountClick()
  {
    dispatch(incrementByAmount(amount));
  }
  return (
    <>
    <button onClick={HandleIncrementClick}>+</button>
    <p>Count:{count}</p>
    <button onClick={HandleDecrementClick}>-</button><br></br>
    <button onClick={HandleResetClick}>Reset</button><br></br>
    <input type="number" value={amount} placeholder='Enter amount Value' onChange={(e)=>setAmount(e.target.value)}/><br></br> 
    <button onClick={HandleIncrementByAmountClick}>Payload amt</button> 
    </>
  )
}

export default App
