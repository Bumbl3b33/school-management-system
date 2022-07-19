import NavigationBar from "../../../components/common/navbar/NavigationBar";
import { Card, CardHeader, CardBody } from "reactstrap";
import { useEffect, useState } from "react";
import StudentForm from "../../../components/forms/studentForm/studentForm";
import CustomTable from "../../../components/common/customTable/CustomTable";

const ManageStudents = () => {

  const [selectedStudentId, setSelectedStudentId] = useState();
  const [classrooms, setClassrooms] = useState();
  const [students, setStudents] = useState()
  //const [loading, setLoading] = useState(true); //use this to render loading component(S) when loading is true

  useEffect(() => {
    /*  Call APIs to load data */
    //const students = await getStudents().then(response => setStudents(response.data)); 
    //const classrooms = await getClassrooms().then(response => setClassrooms(response.data)); 

    setStudents([
      { id: "1", firstName: "john", lastName: "smith", contactNo: "+94814545454", contactPerson: "alex rider", classroom: "Grade 8A", email: "johnsmith@myschool.com", dob: "2001-12-30" },
      { id: "2", firstName: "anna", lastName: "belle", contactNo: "+94811313131", contactPerson: "valak johnson", classroom: "Grade 12A", email: "anabelle@myschool.com", dob: "2002-03-11" },
    ])
    setClassrooms([
      { id: 1, name: "Grade 8A" }, { id: 2, name: 'Grade 12A' }, { id: 3, name: "Grade 12B" }
    ])

    //setLoading(false);
  }, []);

  const onSubmit = () => {
    window.location.reload();
  }
  const onSelectEdit = (e) => { setSelectedStudentId(e.target.id) };

  return (
    <>
      <NavigationBar />
      <div class="container p-3">
        <StudentForm
          classrooms={classrooms}
          selectedStudent={selectedStudentId && students.filter(student => student.id === selectedStudentId)[0]}
          onSubmit={onSubmit} />
      </div>
      <div class="container p-3">
        <Card>
          <CardHeader>
            Existing Students
          </CardHeader>
          <CardBody>
            <CustomTable table={students} buttonHandler={onSelectEdit} buttonText="Edit" />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ManageStudents;
