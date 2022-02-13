import React, { useEffect, useRef } from 'react'
import { useForm } from '../customHook/useForm';

export default function Form2() {
  const initialState = {
    text: '',
    password: ''
  }

  const [value, handValue] = useForm(initialState);

  const inputRef = useRef();

  const SubmitHandler = (e) => {
    e.preventDefault();

    if(!value.text) {
      inputRef.current.focus();
      
    } else {
      console.log(value);
    }
  }


  return (
   <form onSubmit={SubmitHandler}>
      <div className="mb-3">
        <label className="form-label">Email address  {value.text}</label>
        <input 
          ref={inputRef}
          type="text" 
          name='text' 
          className="form-control" 
          value={value.text}   
          onChange={handValue}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password address {value.password}</label>
        <input 
          type="password"  
          name='password' 
          className="form-control" 
          value={value.password} 
          onChange={handValue}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
