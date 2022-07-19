import NavigationBar from "../../../components/common/navbar/NavigationBar";
import { Card, CardHeader, CardBody } from "reactstrap";
import { useEffect, useState } from "react";
import SubjectForm from "../../../components/subjectForm/SubjectForm";
import CustomTable from "../../../components/common/customTable/CustomTable";

const ManageSubjects = () => {

    const [selectedSubjectId, setSelectedSubjectId] = useState();
    const [subjects, setSubjects] = useState()
    //const [loading, setLoading] = useState(true); //use this to render loading component(S) when loading is true

    useEffect(() => {
        /*  Call APIs to load data */
        //const subjects = await getsubjects().then(response => setSubjects(response.data)); 

        setSubjects([
            { id: "1", name: "English", },
            { id: "2", name: "Maths", },
        ])

        //setLoading(false);
    }, []);

    const onSubmit = () => {
        window.location.reload();
    }
    const onSelectEdit = (e) => { setSelectedSubjectId(e.target.id) };

    return (
        <>
            <NavigationBar />
            <div class="container p-3">
                <SubjectForm
                    selectedSubject={selectedSubjectId && subjects.filter(subject => subject.id === selectedSubjectId)[0]}
                    onSubmit={onSubmit} />
            </div>
            <div class="container p-3">
                <Card>
                    <CardHeader>
                        Existing subjects
                    </CardHeader>
                    <CardBody>
                        <CustomTable table={subjects} buttonHandler={onSelectEdit} buttonText="Edit" />
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default ManageSubjects;
