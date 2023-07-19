import React from "react";
import { Routes, Route} from 'react-router-dom';
import MainPage from "../Pages/MainPage";
import NotFoundPage from "../Pages/NotFoundPage";
import DayNasaPicture from "../components/DayNasaPicture";
import NasaImageAndVideo from "../components/NasaImageAndVideo";
import MarsRoverP from "../components/MarsRoverP";
import AboutNasa from "../Pages/AboutNasa";

const MIRouter = () => {
    return (
        <Routes>
            
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/dayimage" element={<DayNasaPicture/>}></Route>
            <Route path="/nasainfo" element={<NasaImageAndVideo/>}></Route>
            <Route path="/nasaRovers" element={<MarsRoverP/>}></Route>
            <Route path="/aboutnasa" element={<AboutNasa/>}></Route>
            
            <Route element={<NotFoundPage/>}></Route>
        </Routes>
    )
}

export default MIRouter