import React, {useState} from 'react';
import { API_KEY } from '../Api/key';
import { useDispatch, useSelector } from 'react-redux';
import { searchInfo } from '../store/miSlice';
import {axios} from 'axios'



const NasaImageAndVideo =  () => {
    const [state, setstate] = useState('');
    const [solt, setSolt] = useState([])
    const dispatch = useDispatch();
    const info = useSelector(state => state.searchnasainfo.nasainfo)
    const alternator = useSelector(state => state.searchnasainfo.movement)
    const peo = false;
    let ratas = [];
    

    const searchInfo = async () => {
        await fetch(`https://images-api.nasa.gov//search?q=${state}`)
       .then ((response) => response.json())
       
       .then ((data) => {dispatch(searchInfo(data))})
    }
    

    const handleinputChange = (e) => {
        setstate(e.target.value)
    } 

    const peos = () => {
        console.log(info);
    }


    return (
        <div>
           <h1>Search about something related with the NASA</h1>
           <div>
            <input onChange={handleinputChange}></input>
            <button onClick={() => searchInfo()}>Search</button>
            
            <button onClick={() => peos()}>hola2</button>
           </div>
         <div>
            {alternator? <p> {ratas.collection.items[0].data[0].title}
                



            </p> : <p>no hay info</p>}
         </div>
           
        </div>
    );
}

export default NasaImageAndVideo;
