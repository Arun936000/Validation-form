import React, { useState } from 'react'

const useForm = () => {
  const [values, setValues] = useState({
    username:"",
    email:"",
    Password:"",
    Password2:""
  });

const [Errors, setErrors] = useState({})

const handlechange = (e)=>{
    const {name,value}= e.target;

    setValues((preValues)=>{
       return {
         ...preValues,
         [name]:values,
       };
    });
  };
  return{handlechange,values};
};



export default useForm