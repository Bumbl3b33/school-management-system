import CustomFormWrapper from "../../common/customFormWrapper/CustomFormWrapper"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClassroomForm = ({ selectedClassroom, onSubmit }) => {
    const [classroom, setClassroom] = useState({});
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setClassroom(selectedClassroom);
    }, [selectedClassroom]);


    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setClassroom((values) => ({ ...values, [name]: value }));
    };

    const onSave = () => {
        toast.success("Saving classroom (not really)...");

        /* Call API endpoint(s) */
        try {
            //createClassroom(classroom.id,classroom);
            //onSubmit();            
        } catch (error) {

        }

        resetForm();
    };

    const onDeleteUserConfirmed = () => {
        toast.success("Deleting classroom (not really)...");

        /* Call API endpoint(s)  */
        try {
            //deleteClassroom(classroom.id);
            //onSubmit();         
        } catch (error) {

        }


        resetForm();
        toggleDeleteModal();
    }

    const resetForm = () => setClassroom({});

    const onDeleteClick = () => {
        //if user  invalid
        if (!classroom?.id) return toast.warn("Please select a classroom");
        toggleDeleteModal();
    }

    const toggleDeleteModal = () => setModal(!modal);

    return (
        <>
            <CustomFormWrapper title="Manage classrooms" onDelete={onDeleteClick} onReset={resetForm} onSave={onSave}>
                <Form>
                    <FormGroup>
                        <Label for="classroom">classroom name</Label>
                        <Input
                            id="classroom"
                            type="text"
                            value={classroom?.classroom || ""}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Form>
            </CustomFormWrapper>
            <ToastContainer />
            <Modal isOpen={modal} toggle={toggleDeleteModal}>
                <ModalHeader toggle={toggleDeleteModal}>Are you sure?</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete a classroom? You cannot undo this
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onDeleteUserConfirmed}>Yes</Button>{' '}
                    <Button color="secondary" onClick={toggleDeleteModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default ClassroomForm;