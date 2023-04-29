const express = require("express");
const server = express();
const router = require("./routes/index")
const PORT = process.env.PORT  || 3001;
const {conn} = require("./DB_connection")

  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
   });


   server.use(express.json());
   server.use("/rickandmorty", router)



server.listen(PORT,()=> console.log(`runing in ${PORT}` ))

























// const http = require("http");
// const getCharById = require("./controllers/getCharById")
// const PORT =3001;

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     if (req.url.includes("onsearch")) {
//         const id =Number( req.url.split("/").at(-1) );
//           getCharById(res, id);
      
//     }
    
    
// }).listen(PORT, "localhost");
    
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
   
