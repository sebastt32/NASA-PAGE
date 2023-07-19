import React from 'react';
import './styles/MainPage.css'
import { Link } from 'react-router-dom';



const MainPage = () => {
    return (
        <div>
        <nav >
        <div >
        
           <div className='buttonsnav'>
           <img className='nasalogo' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png'></img>
           <Link  to='/dayimage'><button className='boton'>Day image</button></Link>
            <Link  to='/nasainfo'><button className='boton'>Search</button></Link> 
            <Link  to='/nasaRovers'><button className='boton'>Rovers pictures</button></Link>
            <Link  to='/aboutnasa'><button className='boton'>About us</button></Link> 
          
           
           </div>
        </div>
           
            
        </nav>
            <div className='backinitial'>
                <div className='boxtest'>This website was created to make use of the information from the NASA database available to developers. It contains three sections, each showcasing different information of great interest about NASA. I invite you to try them out.</div>
            </div>
        </div>
        
    );
}

export default MainPage;
