import React from "react";
import {useFormik} from "formik";

const formValidation = (values) =>{
  
  const errors = {};
  console.log("formValidation",values);

  if(values.email.length <5){
    errors.email = "email should bd minimum 5 chars";
  }
  

  if(values.password.length<8 || values.password.length>15 ){

    errors.password = "password should be min 8 to 15 chars in length";
  }
  console.log(errors)
  return errors;
};


export function Basicforms(params) {

  const formik = useFormik({
    initialValues:{email:"username@",password:""},
    validate:formValidation,
    onSubmit:(values) =>{
      console.log("onsubmit",values)
    },
  });
  return (    

    <form onSubmit={formik.handleSubmit}>
     <input id="email" name="email" value={formik.values.email} type="email" onChange={formik.handleChange} placeholder="Please enter email"/>
     <input id="password" name="password" type="password" onChange={formik.handleChange}  placeholder="Please enter password"/>
   
     <button type="submit">Submit form</button>
     {formik.errors.password}
      {formik.errors.email}
    </form>
    
  );


}
