import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './redux/store'
import { counterSlice } from './features/counter/counterSlice'
import { increment,decrement } from './features/counter/counterSlice'

function App() {

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
  return (
    <>
    <button onClick={HandleIncrementClick}>+</button>
    <p>Count:{count}</p>
    <button onClick={HandleDecrementClick}>-</button>
      
    </>
  )
}

export default App
