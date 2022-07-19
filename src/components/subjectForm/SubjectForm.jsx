import CustomFormWrapper from "../common/customFormWrapper/CustomFormWrapper"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubjectForm = ({ selectedSubject, onSubmit }) => {
    const [subject, setSubject] = useState({});
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setSubject(selectedSubject);
    }, [selectedSubject]);


    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setSubject((values) => ({ ...values, [name]: value }));
    };
    console.log(subject)

    const onSave = () => {
        toast.success("Saving subject (not really)...");

        /* Call API endpoint(s) */
        //createSubject(subject.id,subject);
        //onSubmit();

        resetForm();
    };

    const onDeleteUserConfirmed = () => {
        toast.success("Deleting subject (not really)...");

        /* Call API endpoint(s)  */
        //deleteSubject(subject.id);
        //onSubmit();

        resetForm();
        toggleDeleteModal();
    }

    const resetForm = () => setSubject({});

    const onDeleteClick = () => {
        //if user  invalid
        if (!subject?.id) return toast.warn("Please select a subject");
        toggleDeleteModal();
    }

    const toggleDeleteModal = () => setModal(!modal);

    return (
        <>
            <CustomFormWrapper title="Manage subjects" onDelete={onDeleteClick} onReset={resetForm} onSave={onSave}>
                <Form>
                    <FormGroup>
                        <Label for="name">Subject Name</Label>
                        <Input
                            id="name"
                            type="text"
                            value={subject?.name || ""}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Form>
            </CustomFormWrapper>
            <ToastContainer />
            <Modal isOpen={modal} toggle={toggleDeleteModal}>
                <ModalHeader toggle={toggleDeleteModal}>Are you sure?</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete a subject? You cannot undo this
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onDeleteUserConfirmed}>Yes</Button>{' '}
                    <Button color="secondary" onClick={toggleDeleteModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default SubjectForm;