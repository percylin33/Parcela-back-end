import { Link } from 'react-router-dom';
import Style from './Card.module.css' ;


export default function Card({ id, name, species, image, gender, onClose}) {
   return (
    
      <div className= {Style.car} >
        
         <div className={Style.divBot}>
         <button className= {Style.boton} onClick={onClose}>X</button>
         </div>
      <Link to={`/detail/${id}`}>
           <h2 className= {Style.h2Na} >{name}</h2>
      
         <h2 className= {Style.h2Spe} >{species}</h2>
         <h2 className= {Style.h2Gen}   >{gender}</h2>
         <img  src={image} alt="imagen fallida" /> 
      </Link>
      </div>
  
   );
}
