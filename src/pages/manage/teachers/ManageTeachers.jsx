import NavigationBar from "../../../components/common/navbar/NavigationBar";
import { Card, CardHeader, CardBody } from "reactstrap";
import { useEffect, useState } from "react";
import TeacherForm from "../../../components/forms/teacherForm/TeacherForm";
import CustomTable from "../../../components/common/customTable/CustomTable";

const ManageTeachers = () => {

  const [selectedTeacherId, setSelectedTeacherId] = useState();
  const [teachers, setTeachers] = useState()
  //const [loading, setLoading] = useState(true); //use this to render loading component(S) when loading is true

  useEffect(() => {
    /*  Call API Endpoint(s) */
    try {
      //const teachers = await getTeachers().then(response => setTeachers(response.data)); 
    } catch (error) {

    }


    setTeachers([
      { id: "1", firstName: "john", lastName: "smith", contactNo: "+9472672828", email: "johnsmith@myschool.com" },
      { id: "2", firstName: "anna", lastName: "belle", contactNo: "+9473456789", email: "anabelle@myschool.com" },
    ])


    //setLoading(false);
  }, []);

  const onSubmit = () => {
    window.location.reload();
  }
  const onSelectEdit = (e) => { setSelectedTeacherId(e.target.id) };
  return (
    <>
      <NavigationBar />
      <div class="container p-3">
        <TeacherForm
          selectedteacher={selectedTeacherId && teachers.filter(student => student.id === selectedTeacherId)[0]}
          onSubmit={onSubmit} />
      </div>
      <div class="container p-3">
        <Card>
          <CardHeader>
            Existing teachers
          </CardHeader>
          <CardBody>
            <CustomTable table={teachers} buttonHandler={onSelectEdit} buttonText="Edit" />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ManageTeachers;
