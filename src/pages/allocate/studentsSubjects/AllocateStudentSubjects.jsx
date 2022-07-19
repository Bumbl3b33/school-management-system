import { useEffect, useState } from "react";
import NavigationBar from "../../../components/common/navbar/NavigationBar";
import StudentSelectForm from "../../../components/studentSelectForm/StudentSelectForm";
import StudentSubjectAllocation from "../../../components/StudentSubjectAllocation/StudentSubjectAllocation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllocateStudentSubjects = () => {
  const [studentSubjects, setStudentSubjects] = useState();
  const [subjects, setSubjects] = useState();
  const [studentId, setStudentId] = useState();
  const [students, setStudents] = useState();
  //const [loading, setLoading] = useState(); //use this to render loading component(S) when loading is true

  useEffect(() => {
    //Call APIs to load data
    //const students = await getSubjects().then(response => setSubjects(response.data)); 
    //const classrooms = await getStudents().then(response => setStudents(response.data)); 

    setSubjects([
      { id: 1, name: "sinhala", teacher: "Hirunika P." },
      { id: 2, name: "tamil", teacher: "Jey P." },
      { id: 3, name: "english", teacher: "Fathima P." },
      { id: 4, name: "maths", teacher: "Suresh K." },
      { id: 5, name: "maths", teacher: "Mohotti L." }
    ])

    setStudents([
      {
        id: "1", firstName: "John", lastName: "Smith",
        subjects: [
          { id: 3, name: "english", teacher: "Fathima P." },
          { id: 4, name: "maths", teacher: "Suresh K." }]
      },
      {
        id: "2", firstName: "Anna", lastName: "Belle",
        subjects: [
          { id: 1, name: "sinhala", teacher: "Hirunika P." },
          { id: 5, name: "maths", teacher: "Mohotti L." },
          { id: 2, name: "tamil", teacher: "Jey P." },
        ]
      },
    ])

    //setLoading(false);
  }, []);

  const onDeallocate = (subjectId) => {
    if (!studentId) return toast.warn("Please select a student");
    if (!subjectId) return toast.warn("Please select a subject");
    toast.success("Deallocating (not really)...")
  }

  const onAllocate = (subjectId) => {
    if (!studentId) return toast.warn("Please select a student");
    if (!subjectId) return toast.warn("Please select a subject");
    toast.success("Allocating (not really)...")
  }

  const onSave = () => {
    if (!studentId) toast.warn("Please select a student")
    toast.success("Saving (not really)...")

    /*  Call API Endpoint(s) */
    // await updateStudentSubjects(studentId, studentSubjects);
  }

  const onStudentSelect = (studentId) => {
    setStudentId(studentId);

    /*  Call API Endpoint(s) */
    //setStudentId(studentId);
    //const studentsSubjects = await getStudentSubjects(studentId);
    //setStudentSubjects(studentsSubjects)

    const { subjects } = students.filter(student => student.id === studentId)[0];
    setStudentSubjects(subjects);
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
      <ToastContainer />
    </>
  );
};

export default AllocateStudentSubjects;
