import CustomTable from "../common/customTable/CustomTable";

const TeacherTable = ({ teachers, onSelectEdit }) => {

    return (
        <CustomTable table={teachers} buttonHandler={onSelectEdit} buttonText="Edit" />
    )

}

export default TeacherTable;