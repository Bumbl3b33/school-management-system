import CustomFormWrapper from "../../../components/common/customFormWrapper/CustomFormWrapper";
import CustomTable from "../../../components/common/customTable/CustomTable";
import NavigationBar from "../../../components/common/navbar/NavigationBar";
import { Card, CardHeader, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import StudentReportForm from "../../../components/studentReportForm/StudentReportForm";

const StudentReport = () => {
    const [students, setStudents] = useState([
        {
            id: 1, firstName: "asela", lastName: "ratnayake",
            report: [
                { subject: "english", teacher: "james" },
                { subject: "maths", teacher: "francis" }]
        },
        { id: 2, firstName: "sam", lastName: "basnaya",
        report: [
            { subject: "english", teacher: "akalanka" },
            { subject: "french", teacher: "johnathan" }]
        },
        { id: 3, firstName: "huy", lastName: "koolo",
        report: [
            { subject: "maths", teacher: "plao" },
            { subject: "science", teacher: "giyla" }]
        },
    ]);

    const [report, setReport] = useState()

    /**
     * Updates the report based on the student selected
     */
    const onStudentSelect = (studentId) => {    
        const {report} = students.filter(student => student.id == studentId)[0];
        setReport(report);
    }
    return (
        <>
            <NavigationBar />
            <div class="container p-3" >
                <StudentReportForm students={students} onStudentSelect={onStudentSelect} />
            </div>
            <div class="container p-3">
                <Card>
                    <CardHeader>
                        Teacher and Subject Details
                    </CardHeader>
                    <CardBody>
                        <CustomTable table={report} />
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default StudentReport;
