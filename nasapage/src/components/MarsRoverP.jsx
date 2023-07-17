// eslint-disable-next-line
import React, {useEffect, useState} from 'react';
import { API_KEY } from '../Api/key';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesData1 } from '../store/miSlice';
import NasaRovers from './Gestion/nasaRovers';

const MarsRoverP = () => {
    const dispatch = useDispatch()
    const [state, setstate] = useState([]);
    const info = useSelector(state => state.nasainfocuriosity.data)
    useEffect(() => {
        const value = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
       dispatch(fetchImagesData1(value))
    }, []);
    
    const peo = () => {
        console.log(info)
        setstate(...info)
    }

    return (

        
        <div>
            <button onClick={() => peo()}>hola</button>
            
                <NasaRovers value={info}></NasaRovers>
            
             
        </div>
    );
}

export default MarsRoverP;
