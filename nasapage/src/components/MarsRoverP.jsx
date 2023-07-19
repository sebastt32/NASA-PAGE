// eslint-disable-next-line
import React, {useEffect} from 'react';
import { API_KEY } from '../Api/key';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesData1 } from '../store/miSlice';
import NasaRovers from './Gestion/nasaRovers';

const MarsRoverP = () => {
    const dispatch = useDispatch()
    
    
    const info = useSelector(state => state.nasainfocuriosity.data)
    const alternator = useSelector(state => state.nasainfocuriosity.alternator)
    // useEffect(() => {
    //     const value = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
    //    dispatch(fetchImagesData1(value))
       
    // }, []);

    const funcionality = () => {
        const value = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
        dispatch(fetchImagesData1(value))
    }
    
   

    return (

        
        <div>
        
               
              {alternator? <NasaRovers value={info}></NasaRovers> : <button onClick={() => funcionality()}>hola</button>}
                 
            
             
        </div>
    );
}

export default MarsRoverP;
