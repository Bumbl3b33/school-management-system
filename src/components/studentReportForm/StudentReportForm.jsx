import CustomFormWrapper from "../common/customFormWrapper/CustomFormWrapper";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";

const StudentReportForm = ({students, onStudentSelect}) => {
    const [student, setStudent] = useState({});

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setStudent((values) => ({ ...values, [name]: value }));
        console.log(event.target.value)
        onStudentSelect(event.target.value);
    };

    return (
        <CustomFormWrapper title="Student Report">
            <Form>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <FormGroup>
                                <Label for="studentId">Student</Label>
                                <Input
                                    id="studentId"
                                    type="select"
                                    value={student?.id}
                                    onChange={handleChange}
                                    defaultValue
                                >
                                    {students &&
                                        students.map((student, index) => (
                                            <option key={index} value={student.id}>
                                                {student.firstName + " " + student.lastName}
                                            </option>
                                        ))}
                                </Input>
                            </FormGroup>
                        </div>
                        <div class="col">
                            <FormGroup>
                                <Label for="classroom">Classroom</Label>
                                <Input
                                    id="classroom"
                                    type="text"
                                    readOnly
                                    value={student.classroom || ""}
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
                                    readOnly
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
                                    readOnly
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
                                    readOnly
                                />
                            </FormGroup>
                        </div>
                        <div class="col">
                            <FormGroup>
                                <Label for="dob">Date of Birth</Label>
                                <Input id="dob" type="date" value={student.dob || ""} readOnly />
                            </FormGroup>
                        </div>
                    </div>
                </div>

            </Form>
        </CustomFormWrapper>
    )

}

export default StudentReportForm;