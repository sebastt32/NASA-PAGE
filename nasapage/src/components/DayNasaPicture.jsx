import React, { useState } from 'react';
import { API_KEY } from '../Api/key'
import { useDispatch, useSelector } from 'react-redux';
import { agregarInfo } from '../store/miSlice';
import '../index.css'

const DayNasaPicture = () => {
    let initialState = [];
    const [daystate, setDaystate] = useState(initialState);
    const nasainfo = useSelector(state => state.picturedaytoday.dayinfo)
    const alternator = useSelector(state => state.picturedaytoday.movement)
    let alternator2 = false;
    const dispatch = useDispatch();

    const addHistoryday = async () => {
       await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            setDaystate(data)
            
            ;
        })
    }

    const addHistorydaytool = async () => {
        await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
         .then((response) => response.json())
         .then((data) => {dispatch(agregarInfo(data));})
         .then((data) => {
             peo()
         })
         
            }

    const show =  () => {
        const info = {...daystate}
       dispatch(agregarInfo(info))
    }

    const peo = () => {
        
        alternator2 = true;
        console.log(alternator2);
    }

    return (
        <div>
            {alternator ? 
            <div>
                <h1>Today's picture taken by the Nasa</h1>
                
                <h2>{nasainfo[0].title}</h2>
                <img alt='nasaimage' src={nasainfo[0].url}></img>
                <p>{nasainfo[0].explanation}</p>
            </div>
            
            
            
            
            
            
            
            : 
            
            <div>
            <h1>If you want to se the information make the request in the big button</h1>
            <button onClick={()=> addHistorydaytool() }>ASK FOR INFO</button>
            {alternator2 ? <div>
                Now the last one 
                <button onClick={() => show()}>touch me</button>
            </div> : null}

            </div>}
        </div>
    );
}

export default DayNasaPicture;
