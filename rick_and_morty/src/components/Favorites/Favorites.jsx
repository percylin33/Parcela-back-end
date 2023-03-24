import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css"

const Favorites = () =>{
           const favorites = useSelector((state) => state.myFavorites)
           console.log(favorites)
    return(

        <>
        <h3 className={style.span} >mis favoritos</h3>
            {favorites.map(({id, name, species, gender, image})=>{
                console.log({id})
               return (<Card
               key = {id}
               id= {id}
               name = {name}
               species = {species}
               gender = {gender}
               image ={image}
                
               />);  
            })}
        </>
    );
};

export default Favorites;