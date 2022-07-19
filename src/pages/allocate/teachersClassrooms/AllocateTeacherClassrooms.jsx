import { useEffect, useState } from "react";
import NavigationBar from "../../../components/common/navbar/NavigationBar";
import SelectForm from "../../../components/common/selectForm/SelectForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomTable from "../../../components/common/customTable/CustomTable";
import AllocationForm from "../../../components/common/allocationForm/AllocationForm";

const AllocateTeacherClassrooms = () => {
  const [teacherClassrooms, setTeacherClassrooms] = useState();
  const [classrooms, setClassrooms] = useState();
  const [teacherId, setTeacherId] = useState();
  const [teachers, setTeachers] = useState();
  //const [loading, setLoading] = useState(); //use this to render loading component(S) when loading is true

  useEffect(() => {
    /*  Call API Endpoint(s) */
    try {
      //const classrooms = await getclassrooms().then(response => setClassrooms(response.data)); 
      //const teachers = await getTeachers().then(response => setTeachers(response.data)); 
    } catch (error) {

    }


    setClassrooms([
      { id: 1, name: "Grade 9A" },
      { id: 2, name: "Grade 10B" },
      { id: 3, name: "Grade 12A" },
      { id: 4, name: "Grade 12B" },
      { id: 5, name: "Grade 13" }
    ])

    setTeachers([
      {
        id: "1", firstName: "Fathima", lastName: "Faizal",
        classrooms: [
          { id: 1, name: "Grade 9A" },
          { id: 2, name: "Grade 10B" },
        ]
      },
      {
        id: "2", firstName: "Suresh", lastName: "Kherma",
        classrooms: [
          { id: 3, name: "Grade 12A" },
          { id: 4, name: "Grade 12B" },
          { id: 5, name: "Grade 13" }
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
    if (!teacherId) return toast.warn("Please select a teacher")
    toast.success("Saving (not really)...")

    /*  Call API Endpoint(s) */
    try {
      // await updateteacherClassrooms(teacherId, teacherClassrooms);
    } catch (error) {

    }

  }

  const onTeacherSelect = (teacherId) => {
    setTeacherId(teacherId);

    /*  Call API Endpoint(s) */
    try {
      //setTeacherId(teacherId);
      //const teachersclassrooms = await getteacherClassrooms(teacherId);
      //setTeacherClassrooms(teachersclassrooms)
    } catch (error) {

    }


    const { classrooms } = teachers.filter(teacher => teacher.id === teacherId)[0];
    setTeacherClassrooms(classrooms);
    setTeacherClassrooms(classrooms);
  }

  return (
    <>
      <NavigationBar />
      <div class="container p-3">
        <SelectForm title="Select Teacher" label="Teacher" options={teachers} onSelect={onTeacherSelect} onSave={onSave} />
      </div>
      <div class="container p-3">
        <AllocationForm title="Allocated classrooms" label="Subject" options={classrooms} onAllocate={onAllocate} />
        <CustomTable title="Existing Teachers" table={teacherClassrooms} buttonHandler={onDeallocate} buttonText="Deallocate" />
      </div>
      <ToastContainer />
    </>
  );
};

export default AllocateTeacherClassrooms;
