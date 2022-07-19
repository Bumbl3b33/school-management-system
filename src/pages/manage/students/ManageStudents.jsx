import NavigationBar from "../../../components/common/navbar/NavigationBar";
import {Card, CardHeader, CardBody } from "reactstrap";
import { useState } from "react";
import StudentForm from "../../../components/studentForm/studentFom";
import StudentTable from "../../../components/studentTable/studentTable";

const ManageStudents = () => {
  
  const [selectedStudentId, setSelectedStudentId] = useState(); 
  const [classrooms, setClassrooms] = useState([
    { id: 1, name: "Grade 8A" }, { id: 2, name: 'Grade 12A' }, {id:3, name:"Grade 12B"}
  ]);
  const [students, setStudents] = useState([
    { id: "1", firstName: "john", lastName: "smith", contactNo: "+94814545454", contactPerson: "alex rider", classroom: "Grade 8A" ,email:"johnsmith@myschool.com", dob:"2001-12-30" },
    { id: "2", firstName: "anna", lastName: "belle", contactNo: "+94811313131", contactPerson: "valak johnson", classroom: "Grade 12A" ,email:"anabelle@myschool.com", dob:"2002-03-11" },
  ])

  const onSelectEdit = (e) =>{ setSelectedStudentId(e.target.id)};

  return (
    <>
      <NavigationBar />
      <div class="container p-3">
        <StudentForm classrooms={classrooms} selectedStudent={selectedStudentId && students.filter(student => student.id == selectedStudentId)[0]} />
      </div>
      <div class="container p-3">
        <Card>
          <CardHeader>
          Existing Students
          </CardHeader>
          <CardBody>
            <StudentTable students={students} onSelectEdit={onSelectEdit} />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ManageStudents;
