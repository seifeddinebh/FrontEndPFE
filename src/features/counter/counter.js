import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice'

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    console.log(count)

    const dispatch = useDispatch()
   return (

        <div>
            <button onClick={() => dispatch(increment())}>incrementer</button>

            <div>{count}</div>

            <button onClick={() => dispatch(decrement())}>decrenter</button>
        </div>
   )
}
