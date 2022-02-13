import React from 'react'
import { useForm } from '../customHook/useForm'

const initialState = {
  firstName: '',
  email: '',
  text: ''
}

export default function Contact() {
  const [value, changeHandler] = useForm(initialState);
  console.log(value);

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">First name</label>
        <input 
          type="text" 
          className="form-control"
          name='firstName'
          onChange={changeHandler}
        />
        <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control"
            name='email'
            onChange={changeHandler}
          />
          <label className="form-label">Text </label>
          <textarea 
            name='text' 
            className="form-control" 
            onChange={changeHandler}
            />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
