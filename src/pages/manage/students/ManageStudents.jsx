import NavigationBar from "../../../components/common/navbar/NavigationBar";
import {Card, CardHeader, CardBody } from "reactstrap";
import { useState } from "react";
import StudentForm from "../../../components/studentForm/studentFom";
import StudentTable from "../../../components/studentTable/studentTable";

const ManageStudents = () => {
  
  const [classrooms, setClassrooms] = useState([{ id: 1, name: 'class 1' }, { id: 2, name: 'class 2' }]);
  const [students, setStudents] = useState([
    { id: "1", name: "john", age: 45, wives: 2 },
    { id: "2", name: "sam", age: 35, wives: 12 },
  ])

  return (
    <>
      <NavigationBar />
      <div class="container p-3">
        <StudentForm classrooms={classrooms}  />
      </div>
      <div class="container p-3">
        <Card>
          <CardHeader>
          Existing Students
          </CardHeader>
          <CardBody>
            <StudentTable students={students} />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ManageStudents;
