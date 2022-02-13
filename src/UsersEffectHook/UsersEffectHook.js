import React, { useEffect, useState } from 'react';
import '../App.css';
import load from '../load/load';
import Paging from '../Paging';
import Users from '../Users/Users';

function UsersEffectHook() {

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrent] = useState(1);
  const [totalPage, setTotal] = useState(1);
  
  useEffect(() => {
   load(currentPage).then((res) => {
    setUsers(res.data);
    setCurrent(res.page);
    setTotal(res.total_pages)
   });
  }, [currentPage])

  return (
    <div className='App'>
      <Paging curr={currentPage} total={totalPage}  setCurrent={setCurrent} />
      <Users users={users} />
    </div>
  );
}

export default UsersEffectHook;
