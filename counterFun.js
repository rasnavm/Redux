import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CounterFun() 
{
    const age=useSelector(state=>state.age);
    const dispatch=useDispatch();
   const ageUp=()=>
    {
        dispatch({type:"ADD_AGE"});
    }
    const ageDown=()=>
    {
        dispatch({type:"SUB_AGE"});
    }
  return <div>
      <h1>AGE:{age}</h1>
      <button onClick={ageUp}>AgeUP</button>
      <button onClick={ageDown}>AgeDown</button>

  </div>;
}

export default CounterFun;
