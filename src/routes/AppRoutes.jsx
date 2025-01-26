import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts"; 
import Homepage from "../pages/Homepage"; 

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayouts />}>
                <Route index element={<Homepage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
