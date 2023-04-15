let myFavorites =[];

function postFav(req, res) {
    
    //try {
        let character = req.body;
        console.log(character);
        myFavorites.push(character)
        res.status(200).json(myFavorites);

//    } catch (error) {
//         res.status(500).json({message: error.message})
        
//     }
     
}

function deleteFav(req, res) {
    const {id} = req.params;
    try {
        const persoFiltra = myFavorites.filter((perso)=>perso.id !== Number(id))
       // myFavorites= persoFiltra;
        res.status(200).json(persoFiltra)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
   
}

module.exports = {postFav, deleteFav}