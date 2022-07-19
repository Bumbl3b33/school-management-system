import { useEffect, useState } from "react";
import NavigationBar from "../../../components/common/navbar/NavigationBar";
import SelectForm from "../../../components//common/selectForm/SelectForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomTable from "../../../components/common/customTable/CustomTable";
import AllocationForm from "../../../components/common/allocationForm/AllocationForm";

const AllocateTeacherSubjects = () => {
  const [teacherSubjects, setTeachersubjects] = useState();
  const [subjects, setSubjects] = useState();
  const [teacherId, setTeacherId] = useState();
  const [teachers, setTeachers] = useState();
  //const [loading, setLoading] = useState(); //use this to render loading component(S) when loading is true

  useEffect(() => {
    //Call APIs to load data
    //const subjects = await getSubjects().then(response => setSubjects(response.data)); 
    //const teachers = await getTeachers().then(response => setTeachers(response.data)); 

    setSubjects([
      { id: 1, name: "sinhala" },
      { id: 2, name: "tamil" },
      { id: 3, name: "english"},
      { id: 4, name: "maths"},
      { id: 5, name: "physics"}
    ])

    setTeachers([
      {
        id: "1", firstName: "Fathima", lastName: "Faizal",
        subjects: [
          { id: 3, name: "english"},
          { id: 4, name: "literature" }]
      },
      {
        id: "2", firstName: "Suresh", lastName: "Kherma",
        subjects: [
          { id: 1, name: "maths", },
          { id: 5, name: "physics" },
          { id: 2, name: "tamil" },
        ]
      },
    ])

    //setLoading(false);
  }, []);

  const onDeallocate = (subjectId) => {
    if (!teacherId) return toast.warn("Please select a teacher");
    if (!subjectId) return toast.warn("Please select a subject");
    toast.success("Deallocating (not really)...")
  }

  const onAllocate = (subjectId) => {
    if (!teacherId) return toast.warn("Please select a teacher");
    if (!subjectId) return toast.warn("Please select a subject");
    toast.success("Allocating (not really)...")
  }

  const onSave = () => {
    if (!teacherId) toast.warn("Please select a teacher")
    toast.success("Saving (not really)...")

    /*  Call API Endpoint(s) */
    // await updateteacherSubjects(teacherId, teacherSubjects);
  }

  const onTeacherSelect = (teacherId) => {
    setTeacherId(teacherId);

    /*  Call API Endpoint(s) */
    //setTeacherId(teacherId);
    //const teachersSubjects = await getteacherSubjects(teacherId);
    //setTeachersubjects(teachersSubjects)

    const { subjects } = teachers.filter(teacher => teacher.id === teacherId)[0];
    setTeachersubjects(subjects);
    setTeachersubjects(subjects);
  }

  return (
    <>
      <NavigationBar />
      <div class="container p-3">
        <SelectForm title="Select Teacher" label="Teacher" options={teachers} onSelect={onTeacherSelect} onSave={onSave} />
      </div>
      <div class="container p-3">
        <AllocationForm title="Allocated Subjects" label="Subject" options={subjects} onAllocate={onAllocate} />
        <CustomTable title="Existing Teachers" table={teacherSubjects} buttonHandler={onDeallocate} buttonText="Deallocate" />
        </div>
      <ToastContainer />
    </>
  );
};

export default AllocateTeacherSubjects;
