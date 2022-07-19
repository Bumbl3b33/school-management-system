import React from "react";
import {
  Routes, 
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home"
import ManageStudents from "./pages/manage/students/ManageStudents";
import AllocateStudentSubjects from "./pages/allocate/studentsSubjects/AllocateStudentSubjects";
import Error404 from "./components/common/error404/Error404"
import StudentReport from "./pages/reports/student/studentReport";
import ManageSubjects from "./pages/manage/subjects/ManageSubjects";
import ManageClassrooms from "./pages/manage/classrooms/ManageClassrooms";
import ManageTeachers from "./pages/manage/teachers/ManageTeachers";
import AllocateTeacherSubjects from "./pages/allocate/teacherSubjects/AllocateTeacherSubjects";
import AllocateTeacherClassrooms from "./pages/allocate/teachersClassrooms/AllocateTeacherClassrooms";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/manage/students" element={<ManageStudents/>}/>
        <Route path="/manage/subjects" element={<ManageSubjects/>}/>
        <Route path="/manage/classrooms" element={<ManageClassrooms/>}/>
        <Route path="/manage/teachers" element={<ManageTeachers/>}/>
        <Route path="/allocate/studentSubjects" element={<AllocateStudentSubjects/>}/>
        <Route path="/allocate/teacherSubjects" element={<AllocateTeacherSubjects/>}/>
        <Route path="/allocate/teacherClassrooms" element={<AllocateTeacherClassrooms/>}/>
        <Route path="/reports/student" element={<StudentReport/>}/>
        <Route path="*" element={<Error404 />}/>  
      </Routes>
  );  
}

export default App;
