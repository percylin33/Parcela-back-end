const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios")


async function getCharById(req, res) {
  
  try {
    const {id} = req.params;
      const response = (await axios.get(`${URL}${id}`)).data;
      const character = {
        id: response.id,
        name: response.name,
        gender: response.gender,
        species: response.species
      }
      res.status(200).json(response);
   
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}


// function getCharById(req, res) {
//   const {id} = req.params;

//   try {
//     console.log(id)
//     axios.get(`${URL}${id}`).then((response) => {
//       const {id, name, image, gender, species} = response.data;
//       res.status(200).json({id, name, image, gender, species});
//     });
//   } catch (error) {
//     res.status(500).json({message: error.message});
//   }
// }



module.exports = {getCharById};




// function getCharById(req, res) {
  
//   const {id} = req.params;

//   try {
//     axios.get(`URL${id}`)
//   .then((response)=> response.data )
//   .then((data)=>{
//     const character ={
//         id: data.id,
//         status: data.status,
//         species: data.species,
//         origin: data.origin,
//         image: data.image,
//         gender: data.gender
//     }  
//     res.status(200).json(character)
//   });  
//   } catch (error) {
//      res.status(500).json({message: error.message})
    
//   }
// }




// const axios = require("axios");



// const getCharById = (res, id)=> {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then((data)=>{
//         const character = {
//             id: data.id,
//             image: data.image,
//             name: data.name,
//             gender:data.gender,
//             species: data.species,
//             origin: data.origin,
//             status: data.status
//         }
//         res
//         .writeHead(200,{"content-type": "application/json"})
//         .end( JSON.stringify(character));
           
        
//     })
//     .catch(error=>
//         res
//         .writeHead( 500,{"content-type": "text/plain" })
//         .end("character no encontrado") 
//     );
    
   
// };