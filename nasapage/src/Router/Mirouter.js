import React from "react";
import { Routes, Route} from 'react-router-dom';
import MainPage from "../Pages/MainPage";
import NotFoundPage from "../Pages/NotFoundPage";
import DayNasaPicture from "../components/DayNasaPicture";

const MIRouter = () => {
    return (
        <Routes>
            
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/dayimage" element={<DayNasaPicture/>}></Route>
            <Route element={<NotFoundPage/>}></Route>
        </Routes>
    )
}

export default MIRouter