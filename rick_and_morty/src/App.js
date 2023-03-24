import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
function  App () {
  const navigate =  useNavigate();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const userName = "a@soyhenry.com";
  const password = "percy123";
  
  const onSearch = (id)=> {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // data --> {}
      (data.name ? characters.filter((char) => char.id === data.id).length === 0 : "") ? setCharacters([...characters, data]):
      alert("Personaje no encontrado")
    })
    .catch((error) => console.log(error));
  };
    
  const onClose = (id)=>{
    const filtered = characters.filter((char)=>char.id !== Number(id)) 
    setCharacters(filtered)
  }

  const login = (userData) => {
 
    if(userData.userName === userName
    && 
    userData.password === password){
        setAccess(true);
        navigate("/home")
    }else{
      alert("Usuario y contraseña noson correctos")
    }
    
  };

  const logOut = () =>{
    access && setAccess(false) 
    navigate("/")
  }

  const alea = () => {
    console.log('hola')
  }
  
   useEffect(() =>{
     !access && navigate("/")
   },[access, navigate])

  
  return (


    <div className='App'  >
      {location.pathname !== "/" &&
      <Nav onSearch= {onSearch} logOut={logOut}  /> }
         
      <Routes>
        <Route path='/' element = {<Form login = {login} />} />
        <Route path= '/home' element={<Cards  characters={characters} onClose = {onClose}/>} />
        <Route path= '/about' element={<About/>} />
        <Route path ="/favorites" element = {<Favorites/>}/>
        <Route path= '/detail/:detailId' element={<Detail />} />
      </Routes>

    </div>
  );
}

export default App
