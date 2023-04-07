const http = require("http");
const getCharById = require("./controllers/getCharById")
const PORT =3001;

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.url.includes("onsearch")) {
        const id =Number( req.url.split("/").at(-1) );
          getCharById(res, id);
      
    }
    
    
}).listen(PORT, "localhost");
    
// if (url.includes("/rickandmorty/character/")) {
//     const character = data.find((char)=> char.id == id);  

       
// if (character) {

//     res.writeHead(200, {"Content-Type": "application/json"});
//     return res.end(JSON.stringify(character) );

// }else{
//     res.writeHead(404, {"Content-Type":  "application/json"});
//     return res.end(JSON.stringify({error: "character nod found"}));
// }


//return res.end("ruta no encontrada")
   
