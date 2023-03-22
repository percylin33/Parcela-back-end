import { Link } from 'react-router-dom';
import Style from './Card.module.css' ;
import { connect } from 'react-redux';
import { addFavorite,removeFavorite } from '../../redux/actions';
import { useEffect, useState } from 'react';


 function Card({ id, name, species, image, gender, onClose, addFavorite, removeFavorite, myFavorites,}) {

   const [isFav,setIsFav] = useState(false)
 

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);
      }else{
         setIsFav(true)
         addFavorite(
          {  id,
            species, 
            image, 
            gender, 
            }
         )
      }
   }
   useEffect(()=>{
      myFavorites.forEach((fav) =>{
         if (fav.id ===id) {
            setIsFav(true)
         }
      });
   },[myFavorites]);
    

   return (
    
      <div className= {Style.car} >
        
         <div className={Style.divBot}>
      {     
      isFav ? (
          <button className={Style.btnCora} onClick={handleFavorite}>❤️</button>
      ) : (
          <button className={Style.btnCora} onClick={handleFavorite}>🤍</button>
      )}
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

const mapDispatchToProps = (dispatch) => {
   return{
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },
      removeFavorite: (id) => {
         dispatch(removeFavorite(id))
      }
   }
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites,
   }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Card);
