import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import CustomFormWrapper from "../common/customFormWrapper/CustomFormWrapper";
import CustomTable from "../common/customTable/CustomTable";


const StudentSubjectAllocation = ({ subjects, studentSubjects, onAllocate, onDeallocate }) => {

    const [selectedSubjectId, setSelectedSubjectId] = useState();

    const handleChange = (event) => setSelectedSubjectId(event.target.value)
    const onAllocateClick = () => onAllocate(selectedSubjectId); 
    const onDeallocateClick = (e) => onDeallocate(e.target.id); 
    return (
        <CustomFormWrapper
            title="Allocated Subjects"
        >
            <Form>
                <div class="row">
                    <div class="col-3">
                        <FormGroup>
                            <Label for="subject">Subject</Label>
                            <Input
                                id="subject"
                                type="select"
                                value={selectedSubjectId}
                                onChange={handleChange}
                            >
                                <option value="" disabled selected hidden>Please Choose...</option> 
                                {subjects &&
                                    subjects.map((subject, index) => (
                                        <option key={index} value={subject.id}>{subject.name} {"|"} {subject.teacher}</option>
                                    ))}
                            </Input>
                        </FormGroup>
                        <Button color="success" onClick={onAllocateClick}>Allocate</Button>
                    </div>
                </div>
                <CustomTable title="Existing Subjects" table={studentSubjects} buttonHandler={onDeallocateClick} buttonText="Deallocate" />
            </Form>
        </CustomFormWrapper>
    )
}

export default StudentSubjectAllocation;