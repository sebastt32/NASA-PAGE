import React from 'react';
import '../index.css'
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <nav className='navbar'>
            <img className='nasalogo' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png'></img>
            <button className='buttonsnav'>About us</button>  
            <Link className='buttonsnav' to='/dayimage'><button className='buttonsnav'>Day image</button></Link>
            <button className='buttonsnav'>ask about Nasa</button> 
            <button className='buttonsnav'>NASA pictures</button> 
            </nav>
            <div>
                <h1>Nasa page</h1>
            </div>
        </div>
        
    );
}

export default MainPage;
