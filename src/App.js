import React from "react";
import {
  Routes, 
  Route,
} from "react-router-dom";
import Error404 from "./components/error404/Error404";

import Home from "./pages/home/Home"
import ManageStudents from "./pages/manage/students/ManageStudents";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/manage/students" element={<ManageStudents/>}/>
        <Route path="*" element={<Error404 />}/>
      </Routes>
  );  
}

export default App;
