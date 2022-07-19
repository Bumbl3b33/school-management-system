import CustomTable from "../../../components/customTable/CustomTable";
import CustomFormWrapper from "../../../components/customFormWrapper/CustomFormWrapper";
import NavigationBar from "../../../components/navbar/NavigationBar";
import { Form, FormGroup, Label, Input, Card, CardHeader, CardBody } from "reactstrap";
import { useState } from "react";
import { DateTime } from "luxon";

const ManageStudents = () => {
  const [student, setStudent] = useState({});

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setStudent((values) => ({ ...values, [name]: value }));
  };

  const sampleData = [
    { id: "1", name: "john", age: 45, wives: 2 },
    { id: "2", name: "sam", age: 35, wives: 12 },
  ];

  const classroomData = [{ id: 1, name: 'class 1' }, { id: 2, name: 'class 2' }]

  const onSave = () => {
    console.log("saving...", student);
  };

  const onDelete = () => {
    console.log("onDelete");
  };

  const onReset = () => setStudent({});

  const onEdit = (e) => console.log("refreshing page for...", e.target.id);

  console.log(student);
  return (
    <>
      <NavigationBar />
      <div class="container p-3">
        <CustomFormWrapper title="Manage Students" onDelete={onDelete} onReset={onReset} onSave={onSave}>
        <Form>
          <div class="row">
            <div class="col">
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={student.firstName || ""}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>
            <div class="col">
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={student.lastName || ""}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <FormGroup>
                <Label for="contactPerson">Contact Person</Label>
                <Input
                  id="contactPerson"
                  type="text"
                  value={student.contactPerson || ""}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>
            <div class="col">
              <FormGroup>
                <Label for="contactNo">Contact No.</Label>
                <Input
                  id="contactNo"
                  type="text"
                  value={student.contactNo || ""}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <FormGroup>
                <Label for="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={student.email || ""}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>
            <div class="col">
              <FormGroup>
                <Label for="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={student.dob || ""}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  id="age"
                  readOnly
                  value={(student.dob && DateTime.now().diff(DateTime.fromFormat(student.dob, 'yyyy-MM-dd')).toFormat("yy"))|| "-"}
                />
              </FormGroup>
            </div>
            <div class="col">
              <FormGroup>
                <Label for="classroom">Classroom</Label>
                <Input
                  id="classroom"
                  type="select"
                  value={student.classroom || ""}
                  onChange={handleChange}
                >
                  {classroomData && classroomData.map(classroom => <option key={classroom.id}>{classroom.name}</option>)}
                </Input>
              </FormGroup>
            </div>
          </div>
            
          </Form>
        </CustomFormWrapper>
      </div>
      <div class="container p-3">
        <Card>
          <CardHeader>
          Existing Students
          </CardHeader>
          <CardBody>
            <CustomTable table={sampleData} buttonHandler={onEdit} buttonText="Edit" />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ManageStudents;
