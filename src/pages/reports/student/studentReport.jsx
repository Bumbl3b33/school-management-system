import CustomTable from "../../../components/common/customTable/CustomTable";
import NavigationBar from "../../../components/common/navbar/NavigationBar";
import { Card, CardHeader, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import StudentReportForm from "../../../components/studentReportForm/StudentReportForm";

const StudentReport = () => {
    const [selectedStudentId, setSelectedStudentId] = useState();
    const [students, setStudents] = useState([]);
    const [report, setReport] = useState()
    //const [loading, setLoading] = useState(true) //use this to render loading component(S) when loading is true

    useEffect(() => {
        //Call APIs to load data
        //const students = await getStudents().then(response => setStudents(response.data)); 

        setStudents([
            {
                id: "1", firstName: "john", lastName: "smith", contactNo: "+94814545454", contactPerson: "alex rider", classroom: "Grade 8A", email: "johnsmith@myschool.com", dob: "2001-12-30",
                report: [
                    { subject: "english", teacher: "Fathima P." },
                    { subject: "maths", teacher: "Suresh K." }
                ]
            },
            {
                id: "2", firstName: "anna", lastName: "belle", contactNo: "+94811313131", contactPerson: "valak johnson", classroom: "Grade 12A", email: "anabelle@myschool.com", dob: "2002-03-11",
                report: [
                    { subject: "sinhala", teacher: "Hirunika P." },
                    { subject: "maths", teacher: "Mohotti L." },
                    { subject: "tamil", teacher: "Jey P." },
                ]
            },
        ])

        //setLoading(false)
    }, []);

    /**
     * Updates the report based on the student selected
     */
    const onStudentSelect = (studentId) => {
        setSelectedStudentId(studentId);

        /*  Call API Endpoint(s) to load data */
        // const report = await getStudentReport(studentId).then(response => setReport(response.data));

        const { report } = students.filter(student => student.id === studentId)[0];
        setReport(report);
    }
    return (
        <>
            <NavigationBar />
            <div class="container p-3" >
                <StudentReportForm
                    students={students}
                    onStudentSelect={onStudentSelect}
                    selectedStudent= {selectedStudentId && students.filter(student => student.id === selectedStudentId)[0]}
                    />
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
