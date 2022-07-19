import CustomTable from "../common/customTable/CustomTable";

const SubjectTable = ({ classrooms, onSelectEdit }) => {

    return (
        <CustomTable table={classrooms} buttonHandler={onSelectEdit} buttonText="Edit" />
    )

}

export default SubjectTable;