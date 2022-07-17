import { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import AllocateForm from "../../../components/allocateForm/AllocateForm";
import NavigationBar from "../../../components/navbar/NavigationBar";

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

  const subjects = ["subject 1", "subject 2"];

  const onDeallocate = (e) => console.log("Deallocating...", e.target.id);
  const onAllocate = () => console.log("Allocating...", allocation.subject);

  return (
    <>
      <NavigationBar />
      <AllocateForm
        title="Allocated Subjects"
        table={sampleData}
        onDeallocate={onDeallocate}
        onAllocate={onAllocate}
      >
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
      </AllocateForm>
    </>
  );
};

export default AllocateStudentSubjects;
