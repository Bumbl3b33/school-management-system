import { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import CustomForm from "../../../components/customForm/CustomForm";
import NavigationBar from "../../../components/navbar/NavigationBar";
import CustomTable from "../../../components/customTable/CustomTable";

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
      <CustomForm
        title="Allocated Subjects"
        table={sampleData}
        onSave={onAllocate}
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
      </CustomForm>
      <CustomTable title="Existing Students" table={sampleData} buttonHandler={onDeallocate} buttonText="Deallocate" />
    </>
  );
};

export default AllocateStudentSubjects;
