import CustomTable from "../common/customTable/CustomTable";

const StudentTable = ({ students }) => {

    const onEdit = (e) => {
        console.log("editing student", e.target.id);
    };

    return (
        <CustomTable table={students} buttonHandler={onEdit} buttonText="Edit" />
    )

}

export default StudentTable;