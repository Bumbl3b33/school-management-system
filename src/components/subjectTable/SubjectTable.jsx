import CustomTable from "../common/customTable/CustomTable";

const SubjectTable = ({ subjects, onSelectEdit }) => {

    return (
        <CustomTable table={subjects} buttonHandler={onSelectEdit} buttonText="Edit" />
    )

}

export default SubjectTable;