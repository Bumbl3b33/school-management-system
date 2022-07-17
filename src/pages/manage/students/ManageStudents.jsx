import CustomTable from "../../../components/customTable/CustomTable";
import CustomForm from "../../../components/customForm/CustomForm";
import NavigationBar from "../../../components/navbar/NavigationBar";
import { FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";
import {DateTime} from "luxon";

const ManageStudents = () => {
  const [student, setStudent] = useState({});

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setStudent((values) => ({ ...values, [name]: value }));
  };

  const sampleData = [
    { name: "john", age: 45, wives: 2 },
    { name: "sam", age: 35, wives: 12 },
  ];

  const classroomData = [{id:1,name:'class 1'},{id:2,name:'class 2'}]

  const onSave = () => {
    console.log("saving...", student);
  };

  const onDelete = () => {
    console.log("onDelete");
  };

  const onReset = () => setStudent({});

  console.log(student);
  return (
    <>
      <NavigationBar />
      <CustomForm onDelete={onDelete} onReset={onReset} onSave={onSave}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            id="firstName"
            type="text"
            value={student.firstName || ""}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            id="lastName"
            type="text"
            value={student.lastName || ""}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contactPerson">Contact Person</Label>
          <Input
            id="contactPerson"
            type="text"
            value={student.contactPerson || ""}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contactNo">Contact No.</Label>
          <Input
            id="contactNo"
            type="text"
            value={student.contactNo || ""}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={student.email || ""}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="dob">Date of Birth</Label>
          <Input
            id="dob"
            type="date"
            value={student.dob || ""}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            id="age"
            readOnly
            value={student.dob && DateTime.now().diff(DateTime.fromFormat(student.dob, 'yyyy-MM-dd')).toFormat("yy") || "-"}
          />
        </FormGroup>
        <FormGroup>
          <Label for="classroom">Classroom</Label>
          <Input
            id="classroom"
            type="select"
            value={student.classroom || ""}
            onChange={handleChange}
          >
          {classroomData && classroomData.map(classroom => <option key={classroom.id}>{classroom.name}</option> )}
          </Input>
        </FormGroup>
      </CustomForm>
      <CustomTable title="Existing Students" table={sampleData} />
    </>
  );
};

export default ManageStudents;
