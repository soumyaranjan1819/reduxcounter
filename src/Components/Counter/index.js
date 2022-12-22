import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../Features/counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch= useDispatch()
    console.log(useSelector((state) => state.counter.count))
  return (
    <>
        <h1>{count}</h1>
        <button onClick={()=>{dispatch(increment())}} >+</button>
        <button onClick={()=>{dispatch(decrement())}} >-</button>
    </>
  )
}

export default Counter