import NavigationBar from "../../../components/common/navbar/NavigationBar";
import { Card, CardHeader, CardBody } from "reactstrap";
import { useEffect, useState } from "react";
import ClassroomTable from "../../../components/classroomTable/ClassroomTable";
import ClassroomForm from "../../../components/classroomForm/ClassroomForm";

const ManageClassrooms = () => {

    const [selectedClassroomId, setSelectedClassroomId] = useState();
    const [classrooms, setClassrooms] = useState()
    //const [loading, setLoading] = useState(true); //use this to render loading component(S) when loading is true

    useEffect(() => {
        /*  Call APIs to load data */
        //const classrooms = await getClassrooms().then(response => setClassrooms(response.data)); 

        setClassrooms([
            { id: "1", classroom: "Grade 11A", },
            { id: "2", classroom: "Grade 12A", },
            { id: "3", classroom: "Grade 12B", },
        ])

        //setLoading(false);
    }, []);

    const onSubmit = () => {
        window.location.reload();
    }
    const onSelectEdit = (e) => { setSelectedClassroomId(e.target.id) };
    return (
        <>
            <NavigationBar />
            <div class="container p-3">
                <ClassroomForm
                    selectedClassroom={selectedClassroomId && classrooms.filter(classroom => classroom.id === selectedClassroomId)[0]}
                    onSubmit={onSubmit} />
            </div>
            <div class="container p-3">
                <Card>
                    <CardHeader>
                        Existing classrooms
                    </CardHeader>
                    <CardBody>
                        <ClassroomTable
                            classrooms={classrooms}
                            onSelectEdit={onSelectEdit} />
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default ManageClassrooms;
