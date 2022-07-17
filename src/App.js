import React from "react";
import {
  Routes, 
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home"
import ManageStudents from "./pages/manage/students/ManageStudents";
import AllocateStudentSubjects from "./pages/allocate/studentsSubjects/AllocateStudentSubjects";
import Error404 from "./components/error404/Error404";
import StudentReport from "./pages/reports/student/studentReport";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/manage/students" element={<ManageStudents/>}/>
        <Route path="/allocate/studentSubjects" element={<AllocateStudentSubjects/>}/>
        <Route path="/reports/student" element={<StudentReport/>}/>
        <Route path="*" element={<Error404 />}/>  
      </Routes>
  );  
}

export default App;
