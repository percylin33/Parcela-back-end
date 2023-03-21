import React from "react";
import Style from './Titulo.module.css'
import ima from '../../../assets/imagen/titulo.png'


export default function Titulo() {
    return (
       <div className= {Style.divTitulo}>
       <img className={Style.im} src= {ima} alt='imagen titulo' />
       </div  >

    );
 }
 
