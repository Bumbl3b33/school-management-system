import CustomFormWrapper from "../common/customFormWrapper/CustomFormWrapper";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useState } from "react";

const StudentSelectForm = ({ students, onStudentSelect, onSave }) => {

    const [student, setStudent] = useState({});

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setStudent((values) => ({ ...values, [name]: value }));
        onStudentSelect(event.target.value);
    };

    return (
        <CustomFormWrapper
            title="Select Student"
            onSave={onSave}
        >
            <Form>
                <div class="row">
                    <div class="col-3">
                        <FormGroup>
                            <Label for="studentId">Student</Label>
                            <Input
                                id="studentId"
                                type="select"
                                value={student.id}
                                onChange={handleChange}
                            >
                                <option value="" disabled selected hidden>Please Choose...</option> 
                                {students &&
                                    
                                    students.map((student, index) => (
                                        <option key={index} value={student.id}>
                                        {student.firstName + " " + student.lastName}
                                    </option>
                                    
                                    ))}
                            </Input>
                        </FormGroup>
                    </div>
                </div>
            </Form>
        </CustomFormWrapper>
    )

}

export default StudentSelectForm;