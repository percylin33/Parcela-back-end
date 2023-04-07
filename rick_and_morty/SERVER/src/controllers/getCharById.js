const axios = require("axios");



const getCharById = (res, id)=> {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data)=>{
        const character = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender:data.gender,
            species: data.species,
            origin: data.origin,
            status: data.status
        }
        res
        .writeHead(200,{"content-type": "application/json"})
        .end( JSON.stringify(character));
           
        
    })
    .catch(error=>
        res
        .writeHead( 500,{"content-type": "text/plain" })
        .end("character no encontrado") 
    );
    
   
};
module.exports = getCharById;