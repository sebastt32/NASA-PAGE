import React, { useState } from 'react';
import { API_KEY } from '../Api/key'
import { useDispatch, useSelector } from 'react-redux';
import '../index.css'

const DayNasaPicture = () => {
    let initialState = null
    const [daystate, setDaystate] = useState(initialState);
    const dispatch = useDispatch();

    const addHistoryday = async () => {
       await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            setDaystate(data)
            console.log(data);
        })
    }

    const show = () => {
       dispatch(daystate)
    }

    return (
        <div>
            hola soy la foto diaria
            <button onClick={()=>addHistoryday()}>Info About day Image</button>
            <button onClick={() => show}>organize</button>
            <div>
               {daystate ? <div className='boxDay'>
               {daystate.title}
               <img className='daylogo' alt='imageDay' src={daystate.hdurl}></img>
               {daystate.explanation}
               {daystate.date}
               
               
               
               
               
               
               
               </div> : <h1>No Hay Info</h1>}
                
            </div>
        </div>
    );
}

export default DayNasaPicture;
