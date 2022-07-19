import CustomFormWrapper from "../../common/customFormWrapper/CustomFormWrapper"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TeacherForm = ({ selectedteacher, onSubmit }) => {
    const [teacher, setTeacher] = useState({});
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setTeacher(selectedteacher);
    }, [selectedteacher]);

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setTeacher((values) => ({ ...values, [name]: value }));
    };

    const onSave = () => {
        toast.success("Saving teacher (not really)...");

        /* Call API endpoint(s) */
        try {
            //createTeacher(teacher.id,teacher);
            //onSubmit();
        } catch (error) {

        }


        resetForm();
    };

    const onDeleteUserConfirmed = () => {
        toast.success("Deleting teacher (not really)...");

        /* Call API endpoint(s)  */
        try {
            //deleteTeacher(teacher.id);
            //onSubmit();
        } catch (error) {

        }

        resetForm();
        toggleDeleteModal();
    }

    const resetForm = () => setTeacher({});

    const onDeleteClick = () => {
        //if user  invalid
        if (!teacher?.id) return toast.warn("Please select a teacher");
        toggleDeleteModal();
    }

    const toggleDeleteModal = () => setModal(!modal);

    return (
        <>
            <CustomFormWrapper title="Manage teachers" onDelete={onDeleteClick} onReset={resetForm} onSave={onSave}>
                <Form>
                    <div class="row">
                        <div class="col">
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    value={teacher?.firstName}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                        <div class="col">
                            <FormGroup>
                                <Label for="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    type="text"
                                    value={teacher?.lastName}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <FormGroup>
                                <Label for="contactNo">Contact No.</Label>
                                <Input
                                    id="contactNo"
                                    type="text"
                                    value={teacher?.contactNo || ""}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                        <div class="col">
                            <FormGroup>
                                <Label for="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={teacher?.email || ""}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                    </div>
                </Form>
            </CustomFormWrapper>
            <ToastContainer />
            <Modal isOpen={modal} toggle={toggleDeleteModal}>
                <ModalHeader toggle={toggleDeleteModal}>Are you sure?</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete a teacher? You cannot undo this
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onDeleteUserConfirmed}>Yes</Button>{' '}
                    <Button color="secondary" onClick={toggleDeleteModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default TeacherForm;