import { useEffect, useState } from "react";
import NavigationBar from "../../../components/common/navbar/NavigationBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectForm from "../../../components/common/selectForm/SelectForm";
import AllocationForm from "../../../components/common/allocationForm/AllocationForm";
import CustomTable from "../../../components/common/customTable/CustomTable";

const AllocateStudentSubjects = () => {
  const [studentSubjects, setStudentSubjects] = useState();
  const [subjects, setSubjects] = useState();
  const [studentId, setStudentId] = useState();
  const [students, setStudents] = useState();
  //const [loading, setLoading] = useState(); //use this to render loading component(S) when loading is true

  useEffect(() => {
    /* Call API endpoint(s)  */
    try {
      //const students = await getSubjects().then(response => setSubjects(response.data)); 
      //const classrooms = await getStudents().then(response => setStudents(response.data)); 
    } catch (error) {

    }


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
    if (!studentId) return toast.warn("Please select a student")
    toast.success("Saving (not really)...")

    /*  Call API Endpoint(s) */
    try {
      // await updateStudentSubjects(studentId, studentSubjects);
    } catch (error) {

    }

  }

  const onStudentSelect = (studentId) => {
    setStudentId(studentId);

    /*  Call API Endpoint(s) */
    try {
      //setStudentId(studentId);
      //const studentsSubjects = await getStudentSubjects(studentId);
      //setStudentSubjects(studentsSubjects)
    } catch (error) {

    }


    const { subjects } = students.filter(student => student.id === studentId)[0];
    setStudentSubjects(subjects);
    setStudentSubjects(subjects);
  }

  return (
    <>
      <NavigationBar />
      <div class="container p-3">
        <SelectForm title="Select Student" label="Student" options={students} onSelect={onStudentSelect} onSave={onSave} />
      </div>
      <div class="container p-3">
        <AllocationForm title="Allocated Subjects" label="Subject" options={subjects} onAllocate={onAllocate} />
        <CustomTable title="Existing Subjects" table={studentSubjects} buttonHandler={onDeallocate} buttonText="Deallocate" />
      </div>
      <ToastContainer />
    </>
  );
};

export default AllocateStudentSubjects;
