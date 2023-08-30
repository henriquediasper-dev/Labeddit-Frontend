import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/login/Login";

export function RouterPage(){
    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<LoginPage/>}/>
        </Routes>
    </BrowserRouter>)
}