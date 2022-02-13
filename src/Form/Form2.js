import React from 'react'

export default function Form2() {
  return (
   <form>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password address</label>
        <input type="password" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
