
const validLettersAndNumbers = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = (inputs) => {
    const errors = {}
    if(!regexEmail.test(inputs.userName)){
        errors.userName = 'Debe ser un email'
    }
    if(!inputs.userName){
        errors.userName = 'No puede ser vacio'
    }
    if(inputs.userName.length > 35){
        errors.userName = 'No puede tener mas de 35 caracteres'
    }

    if(!validLettersAndNumbers.test(inputs.password)){
        errors.password = 'La contraseña debe tener al menos un numero'
    }    
    if(inputs.password.length < 6 || inputs.password.length > 10){
       errors.password = 'Debe tener entre 6 y 10 caracteres' 
    }
    return errors;
};