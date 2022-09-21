import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Timer from "./Timer";
import Calculator from "./Calculator";


export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/time' element={<Timer />} />
            <Route path='/calculator' element={<Calculator />} />
        </Routes>
    </BrowserRouter>
  );
}
