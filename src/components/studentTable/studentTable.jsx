import CustomTable from "../common/customTable/CustomTable";

const StudentTable = ({ students, onSelectEdit }) => {

    return (
        <CustomTable table={students} buttonHandler={onSelectEdit} buttonText="Edit" />
    )

}

export default StudentTable;