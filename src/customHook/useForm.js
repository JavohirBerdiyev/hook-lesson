import React from 'react'

export const useForm = (initialState) => {
  const [value, setValue] = React.useState(initialState);
  return [
    value,
    (e) => {
      setValue({
        ...value,
        [e.target.name]: e.target.value
      });
    },
  ];
}
