import passport from "passport";
import { Strategy as LocalStrategy} from "passport-local";
import User from '../models/user';

 const localAauth = () => {

    passport.serializeUser((user: any,done) => {
        done(null, user._id)
    })
    passport.deserializeUser(async (_id,done)=>{
        try {
             const user = await User.findById(_id)
             done(null,user)
        } catch (err) {
            done(err, null)
        }
    })

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},async (req, email, password, done)=>{ 
    const {name, lastname, phone, date} = req. body;
    const usuario = await User.findOne({email: email})
    
    if(usuario) {
        req.flash('signupMessage', 'the email is already taken')
        return done(null, false, {message: email})  
    }else {
        const newUser = new User()
        newUser.name = name
        newUser.lastname = lastname
        newUser.phone = phone
        newUser.date = date
        newUser.email = email
        newUser.password = newUser.encryptPassword(password)
        await newUser.save()
        done(null, newUser)  
    }
}
))

passport.use('local-signin', new LocalStrategy({
    usernameField:  'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {

    try {
        const usuario = await User.findOne({email: email}) 
        
        if(!usuario) {
             req.flash('signinMessage', 'no user found')
            return done(null, false, {message: email})
        }
        if(!usuario.comparePassword(password)) {
            req.flash('signinMessage','incorrect password')
            return done(null, false, {message: email})
        }
       done(null, usuario)
    } catch (error) {
        done(error, false)
    }
}))

}

 export default localAauth;