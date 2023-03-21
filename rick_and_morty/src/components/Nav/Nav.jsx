import React from "react";
//import styl from './Nav.nodule.css'
import Titulo from "./Titulo/Titulo";
import SearchBar from "./SearchBar/SearchBar";
import styled from './Nav.module.css'
import { Link } from "react-router-dom";


function Nav(props) {
   
   return(
   <div className= {styled.continerNav} >
     <Titulo />
     <Link  to='/about' className={styled.aAbout} >About </Link >
     <Link to = '/home' className={styled.aHome} >Home</Link>
     <SearchBar onSearch={(characterID)=> props.onSearch(characterID)} logOut = {props.logOut} ></SearchBar>
   </div>

   ) 
}

export default Nav ;