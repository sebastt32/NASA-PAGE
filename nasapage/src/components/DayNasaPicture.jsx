import React, { useState } from 'react';
import { API_KEY } from '../Api/key'
import { useDispatch, useSelector } from 'react-redux';
import { agregarInfo } from '../store/miSlice';

import './styles/day.css'

const DayNasaPicture = () => {
    let initialState = [];
    // eslint-disable-next-line
    const [daystate, setDaystate] = useState(initialState);
    const nasainfo = useSelector(state => state.picturedaytoday.dayinfo)
    const alternator = useSelector(state => state.picturedaytoday.movement)
    
    const dispatch = useDispatch();

    // const addHistoryday = async () => {
    //    await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setDaystate(data)
            
    //         ;
    //     })
    // }

    const addHistorydaytool = async () => {
        await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
         .then((response) => response.json())
         .then((data) => {dispatch(agregarInfo(data));})
         
         
            }

    

   

    return (
        <div>
            {alternator ? 
            <div className='imagetofix'>
                <h1 className='textsecond'>Today's picture taken by the Nasa</h1>
                
                <h2 className='textsecond'>{nasainfo[0].title}</h2>
                <img className='nasaimage' alt='nasaimage' src={nasainfo[0].url}></img>
                <h4 className='textsecond'>{nasainfo[0].explanation}</h4>
            </div>
            
            : 
            
            <div>
            <h1 className='textfirst'>If you want to see the information make the request in the big button</h1>
            <button className='buttonrequest' onClick={()=> addHistorydaytool() }>ASK FOR INFO</button>
            

            </div>}
        </div>
    );
}

export default DayNasaPicture;
