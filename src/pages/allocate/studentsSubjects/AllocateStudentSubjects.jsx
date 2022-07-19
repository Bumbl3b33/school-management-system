import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import CustomFormWrapper from "../../../components/common/customFormWrapper/CustomFormWrapper";
import NavigationBar from "../../../components/common/navbar/NavigationBar";
import CustomTable from "../../../components/common/customTable/CustomTable";

const AllocateStudentSubjects = () => {
  const [allocation, setAllocation] = useState({});

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setAllocation((values) => ({ ...values, [name]: value }));
  };

  const sampleData = [
    { id: 1, name: "john", age: 45, wives: 2 },
    { id: 2, name: "sam", age: 35, wives: 12 },
  ];

  const students = ["student 1", "student 2"];
  const subjects= ["subject 1", "subject 2"];

  const onDeallocate = (e) => console.log("Deallocating...", e.target.id);
  const onAllocate = () => console.log("Allocating...", allocation.subject);
  const onSave = () => console.log("Saving...", allocation.subject);

  return (
    <>
      <NavigationBar />
      <div class="container p-3">
        <CustomFormWrapper
          title="Select Student"
          table={sampleData}
          onSave={onSave}
        >
          <Form>
          <div class="row">
            <div class="col-3">
              <FormGroup>
                <Label for="student">Student</Label>
                <Input
                  id="student"
                  type="select"
                  value={allocation.student || ""}
                  onChange={handleChange}
                >
                  {students &&
                    students.map((student, index) => (
                      <option key={index}>{student}</option>
                    ))}
                </Input>
              </FormGroup>
            </div>
          </div>
          </Form>
        </CustomFormWrapper>
      </div>
      <div class="container p-3">
      <CustomFormWrapper
          title="Allocated Subjects"
          table={sampleData}
          >
          <Form>
          <div class="row">
            <div class="col-3">
              <FormGroup>
                <Label for="subject">Subject</Label>
                <Input
                  id="subject"
                  type="select"
                  value={allocation.subject || ""}
                  onChange={handleChange}
                >
                  {subjects &&
                    subjects.map((subject, index) => (
                      <option key={index}>{subject}</option>
                    ))}
                </Input>
              </FormGroup>
              <Button color="success" onClick={onAllocate}>Allocate</Button>
            </div>
          </div>
          <CustomTable title="Existing Students" table={sampleData} buttonHandler={onDeallocate} buttonText="Deallocate" />
            
          </Form>
        </CustomFormWrapper>
      </div>
      <div class="container p-3">
        
      </div>
    </>
  );
};

export default AllocateStudentSubjects;
