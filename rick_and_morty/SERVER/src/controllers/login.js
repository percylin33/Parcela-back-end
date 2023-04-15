const data = require("../utils/users")
function login(req, res) {
    const {email, password}= req.query;
        console.log(email, password);
       const userfind = data.find((user)=> user.email === email && user.password === password);
    
       if (userfind) {
        
           res.status(200).json({access: true})
       }else{

           res.status(200).json({access: false});
       }
         
}
module.exports = {login};