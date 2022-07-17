import CustomForm from "../../../components/customForm/CustomForm";
import CustomTable from "../../../components/customTable/CustomTable";
import NavigationBar from "../../../components/navbar/NavigationBar";
import { FormGroup, Label, Input, Card, CardHeader, CardBody} from "reactstrap";
import { useState, useEffect } from "react";

const StudentReport = () => {
    const [student, setStudent] = useState({});
    const [studentList, setStudentList] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setStudent((values) => ({ ...values, [name]: value }));
    };

    const sampleReport = [
        { subject: "english", teacher: "james" },
        { subject: "maths", teacher: "francis" },
    ];

    useEffect(() => {
        const students = [
            { id: 1, firstName: "asela", lastName: "ratnayake" },
            { id: 2, firstName: "sam", lastName: "basnaya" },
        ];
        setStudentList(students);
        setLoading(false);
    }, []);

    return (
        <>
            <NavigationBar />
            <div class="container p-3" >
                <CustomForm title="Student Report">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <FormGroup>
                                    <Label for="studentId">Student</Label>
                                    <Input
                                        id="studentId"
                                        type="select"
                                        value={student.id || ""}
                                        onChange={handleChange}
                                    >
                                        {studentList &&
                                            studentList.map((student) => (
                                                <option key={student.id}>
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
                </CustomForm>
            </div>
            <div class="container p-3">
                <Card>
                    <CardHeader>
                        Teacher and Subject Details
                    </CardHeader>
                    <CardBody>
                        <CustomTable table={sampleReport} />
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default StudentReport;
