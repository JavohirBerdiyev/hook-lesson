import React from 'react'

export default function Users({users}) {
  return (
    <ul className="row">
      {users.map((item) => {
        return (
          <li key={item.first_name} className='list-group-item col-3'>
            <div className="card" style={{width: '18rem'}}>
              <img src={item.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.first_name} {item.lasr_name}</h5>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
