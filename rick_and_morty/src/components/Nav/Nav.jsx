import React from "react";

import Titulo from "./Titulo/Titulo";
import SearchBar from "./SearchBar/SearchBar";
import styled from './Nav.module.css'
import { Link } from "react-router-dom";
import icoAbout from "../../assets/imagen/proyecto10.png"
import icoHome from "../../assets/imagen/home.png"
import icofavo from "../../assets/imagen/favorite.png"

function Nav(props) {
   
   return(
   <div className= {styled.continerNav} >
    
     <div className={styled.navBar} >

       <Link  to='/about' className={styled.aHome}><img src={icoAbout} alt="no cargo" className={styled.ima} /> About </Link >
       <Link to = '/home' className={styled.aHome} ><img src={icoHome} alt="no cargo" className={styled.ima} />Home</Link>
       <Link to = "favorites" className={styled.aHome}><img src={icofavo} alt="no cargo" className={styled.ima} />Favorites</Link>
     </div>
      <Titulo />
     <SearchBar onSearch={(characterID)=> props.onSearch(characterID)} logOut = {props.logOut} ></SearchBar>
   </div>

   ) 
}

export default Nav ;