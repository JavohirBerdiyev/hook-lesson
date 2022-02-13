function load(page=1) {
  return  (
  fetch(`https://reqres.in/api/users?page=${page}`) 
    .then((x) => x.json())
    // .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    })
  )
}

export default load