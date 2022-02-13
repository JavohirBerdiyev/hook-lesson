import React, { useEffect, useState } from 'react'

export default function Lists() {

  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [count, setCount] = useState(0);

  const addNumber = () => {
    const randNumber = Math.round(Math.random()*10);
    setNumbers([...numbers ,randNumber]);
  }

  useEffect(() => {
    console.log('DID MOUNT');

    return () => {
      console.log('WILL Unmount');
    }
  }, []);


  useEffect(() => {
    console.log('DID UPDATE');
  }, [count, numbers])

  return (
      <div>
        <ul>
          {numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
      </ul>
      <button onClick={() => setCount(count + 1)} className='btn btn-secondary mx-3'>Count changed {count}</button>
      <button onClick={addNumber} className='btn btn-primary'>New Count</button>
    </div>
  )
}
