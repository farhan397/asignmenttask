import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux';

import { useDispatch } from "react-redux";
import { decrement, increment } from '../service/actions/actions';


const Countercomponent = () => {

    const dispatch = useDispatch();
   const counterstate = useSelector(state => state.countstate);
   const [count, setcount] = useState(counterstate);
   console.log(counterstate)
  return (
    <div>
      <Button variant="contained"onClick={() => dispatch(increment())}>Increment</Button>
      <span style={{margin:10}}>{counterstate}</span>
      <Button variant="contained"onClick={() => dispatch(decrement())}>Decrement</Button>
      
    </div>
  )
}

export default Countercomponent
