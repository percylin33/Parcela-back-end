import React from "react";
import styled from './About.module.css'
export default function About() {
    return(
        <div className={styled.continer} >
            <>
          <div className={styled.aboutApp} > 
            <h2>Acerca de la App</h2>

            <p>
              La pagina web esta basada en una serie de televicion de los EE.UU, Rick and Morty .
              <br/>
              <br/>
              Este proyecto integrador utilizamos los conocimientos abquiridos en el curso de SoyHenry 
            </p>
          </div> 
            <br/>
          <div className={styled.aboutMe}>
            <h2>Sobre mi
            </h2>

            <p>s</p>
          </div>
          </>
        </div>
    )
}