import React, {useState} from 'react';
// import { API_KEY } from '../Api/key';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesData } from '../store/miSlice';
import Nasaimages from './Gestion/nasaimages';
import './styles/nasasearching.css'







const NasaImageAndVideo =  () => {

    const [stateSearch, setStateSearch] = useState('');
    const dispatch = useDispatch();
     const info = useSelector(state => state.nasainfo.data)
     const alt = useSelector(state => state.nasainfo.alternator)
     

    const movement = () => {
        const value = `https://images-api.nasa.gov//search?q=${stateSearch}`
        dispatch(fetchImagesData(value))
    }
    
    const handleInputChange = (event) => {
        setStateSearch(event.target.value);
    };

    

     
    
    

    return (
        <div>
        <div className='searcher'>
         <button className='botonsearch' onClick={() => movement()}>search</button>
         <input className='inputsearch'  onChange={handleInputChange}></input> 
         
        </div>
          {alt? <Nasaimages valor={info}></Nasaimages> : <h1 className='initialtext'>Nothing here</h1>} 
         
           
        </div>
    );
}

export default NasaImageAndVideo;
