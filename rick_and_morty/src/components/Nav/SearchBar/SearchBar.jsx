import { useState } from "react";
import React from "react";
import o from '../SearchBar/SearchBar.module.css'

export default function SearchBar(props) {
   const[character, setCharacter] = useState('')
   const handleInputChange = (event)=>{
      const{value} = event.target
      setCharacter(value)
   }
   //const [id, setId]= useState('')
   const handleRandonId = () => {
      const randonId = Math.floor(Math.random() * 826)+1;
      props.onSearch(randonId)
      setCharacter("");
      console.log('hols')
   }
     
   return (
      <div className={o.continerSearch}>
          
          <input className={o.inpu} type='search' onChange={handleInputChange}  />
      <button className={o.boton} onClick={()=>props.onSearch(character)} >Agregar</button> 
      <button onClick={()=>props.logOut()} className={o.boton2} >LogOut</button>
       <button onClick={()=>handleRandonId()} className={o.botonAle}  >Aleatorio</button> 
      
      </div>
   );
}
