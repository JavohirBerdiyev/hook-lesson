import React from 'react'

export default function Paging({curr, total, setCurrent}) {
  let label = curr === total ? 'Prev' : 'Next';

  const onClickHandler = () => {
    let newpage;

    if(curr === total) {
      newpage = curr - 1;
    } else {
      newpage = curr + 1;
    }

    setCurrent(newpage);
  }
  return (
    <div>
      <button onClick={onClickHandler} className='btn btn-success'>{label}</button>
    </div>
  )
}
