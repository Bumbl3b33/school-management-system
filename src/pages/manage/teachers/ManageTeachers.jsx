import NavigationBar from "../../../components/common/navbar/NavigationBar";
import {Card, CardHeader, CardBody } from "reactstrap";
import { useEffect, useState } from "react";
import TeacherTable from "../../../components/teacherTable/TeacherTable";
import TeacherForm from "../../../components/teacherForm/TeacherForm";

const ManageTeachers = () => {
  
  const [selectedTeacherId, setSelectedTeacherId] = useState(); 
  const [teachers, setTeachers] = useState()
  //const [loading, setLoading] = useState(true); //use this to render loading component(S) when loading is true

  useEffect(() => {
    /*  Call APIs to load data */
    //const teachers = await getTeachers().then(response => setTeachers(response.data)); 
    
    setTeachers([
      { id: "1", firstName: "john", lastName: "smith", contactPerson: "alex rider", email:"johnsmith@myschool.com"},
      { id: "2", firstName: "anna", lastName: "belle", contactPerson: "valak johnson",email:"anabelle@myschool.com"},
    ])


    //setLoading(false);
  }, []);

  const onSubmit = () => {
    window.location.reload();
  }
  const onSelectEdit = (e) =>{ setSelectedTeacherId(e.target.id)};
  return (
    <>
      <NavigationBar />
      <div class="container p-3">
        <TeacherForm 
          selectedteacher={selectedTeacherId && teachers.filter(student => student.id === selectedTeacherId)[0]}
          onSubmit={onSubmit}/>
      </div>
      <div class="container p-3">
        <Card>
          <CardHeader>
          Existing teachers
          </CardHeader>
          <CardBody>
            <TeacherTable 
              teachers={teachers} 
              onSelectEdit={onSelectEdit} />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ManageTeachers;
