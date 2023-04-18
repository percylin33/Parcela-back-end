// export const ADD_FAVORITE = "ADD_FAVORITE";
// export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
import axios from "axios";

// export const addFavorite = (character) => {
//     return{
//       type: ADD_FAVORITE,
//       payload: character
//     };
// };


// ACTION | addFav
export const addFavorite = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
    
      try {
           const response= await axios.post(endpoint, character)
           const data  = response.data;
           return dispatch({
              type: 'ADD_FAV',
              payload: data,
         });
      } catch (error) {
         alert("No se agrego a fovoritos ")
      }
      
   };
};

export const removeFavorite = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      try {
         const response = await axios.delete(endpoint);
         const data = response.data;
            return dispatch({
              type: 'REMOVE_FAV',
              payload: data,
            });
      } catch (error) {
         alert(" No se borro la card de favoritos")
      }
       
   };
 }