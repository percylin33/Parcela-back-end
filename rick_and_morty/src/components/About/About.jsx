import React from "react";
import styled from './About.module.css'
export default function About() {
    return(
        <div className={styled.continer} >
            <>
          <div className={styled.aboutApp} > 
            <h2>About The App</h2>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, praesentium repellendus sequi sint natus aspernatur reprehenderit a saepe repudiandae delectus laudantium voluptas, qui neque ipsam illum porro suscipit magni? Necessitatibus!</p>
          </div> 
            <br/>
          <div className={styled.aboutMe}>
            <h2>About me</h2>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem officia expedita tempora? Obcaecati temporibus modi quo repellendus fugit qui, ex hic dolorem, earum dolor illum harum autem. Nulla, fugit quidem!</p>
          </div>
          </>
        </div>
    )
}