import {React, useState} from "react";
import { validate } from "./validation";
import styled from './Form.module.css';


export default function Form(props) {
       const [userData, setUserData] = useState({
         userName: '', 
         password: '',
       })

       const [errors, setErrors] = useState({
         userName: '',
         password: '',
       })

       const handleChange = (event)=>{
          const{name, value}= event.target;
          setUserData({
            ...userData,
            [name]:value,
          })
          setErrors(
            validate({
            ...userData,
            [name]: value,
          })
          );
       };

       const handleSubmit = (event) =>{
          event.preventDefault();
          props.login(userData);
       }
    
    return(
        <form className = {styled.form} onSubmit = {handleSubmit} >
            <label htmlFor="" >Nombre:</label>
            <input 
              className={errors.userName && styled.warning} 
              type = 'text'
              placeholder="Escribe tu email..."
              name = 'userName'
              value={userData.userName}
              onChange = {handleChange}
             />
             {errors.userName? (<p className = {styled.danger} >{errors.userName}</p>) : null}

            <label htmlFor="" >Password:</label>
            <input
              className={errors.password && styled.warning}
              type = 'password'
              placeholder="Escribre tu contraceña..."
              name="password"
              value={userData.password}
              onChange= {handleChange}
            />
            {errors.password?( <p className= {styled.danger} >{errors.password}</p> ): null}

            <button type="submit" >LOGIN</button>
        </form>
    )
}
