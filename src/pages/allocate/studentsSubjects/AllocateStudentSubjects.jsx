import { useState } from "react";
import NavigationBar from "../../../components/common/navbar/NavigationBar";
import StudentSelectForm from "../../../components/studentSelectForm/StudentSelectForm";
import StudentSubjectAllocation from "../../../components/StudentSubjectAllocation/StudentSubjectAllocation";

const AllocateStudentSubjects = () => {
  const [allocation, setAllocation] = useState({});
  const [studentSubjects, setStudentSubjects] = useState();
  const [subjects, setSubjects] = useState([{ id: 1, name: "sinhala" }, { id: 2, name: "tamil" }, { id: 3, name: "english" }, { id: 4, name: "maths" }]);

  const [students, setStudents] = useState([
    {
      id: 1, firstName: "asela", lastName: "ratnayake",
      subjects: [
        { id: 3, subject: "english", teacher: "james" },
        { id: 4, subject: "maths", teacher: "francis" }]
    },
    {
      id: 2, firstName: "sam", lastName: "basnaya",
      subjects: [
        { id: 4, subject: "english", teacher: "akalanka" },
        { id: 2, subject: "tamil", teacher: "johnathan" }]
    },
    {
      id: 3, firstName: "huy", lastName: "koolo",
      subjects: [
        { id: 1, subject: "sinhala", teacher: "plao" },
        { id: 3, subject: "english", teacher: "giyla" }]
    },
  ]);

  const onDeallocate = (id) => console.log("Deallocating subject id...", id);
  const onAllocate = (id) => console.log("Allocating subject id...", id);
  const onSave = () => console.log("Saving...", allocation.subject);

  const onStudentSelect = (studentId) => {
    console.log(studentId);

    //update student's subjects
    const { subjects } = students.filter(student => student.id == studentId)[0];
    setStudentSubjects(subjects);
  }

  return (
    <>
      <NavigationBar />
      <div class="container p-3">
        <StudentSelectForm students={students} onStudentSelect={onStudentSelect} onSave={onSave} />
      </div>
      <div class="container p-3">
        <StudentSubjectAllocation subjects={subjects} studentSubjects={studentSubjects} onAllocate={onAllocate} onDeallocate={onDeallocate} />

      </div>
      <div class="container p-3">

      </div>
    </>
  );
};

export default AllocateStudentSubjects;
