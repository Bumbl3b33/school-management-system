import CustomFormWrapper from "../../common/customFormWrapper/CustomFormWrapper"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentForm = ({ classrooms, selectedStudent, onSubmit }) => {
    const [student, setStudent] = useState({});
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setStudent(selectedStudent);
    }, [selectedStudent]);


    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setStudent((values) => ({ ...values, [name]: value }));
    };
    
    const onSave = () => {
        toast.success("Saving student (not really)...");
        
        /* Call API endpoint(s) */
        //createStudent(student.id,student);
        //onSubmit();

        resetForm();
    };

    const onDeleteUserConfirmed = () => {       
        toast.success("Deleting student (not really)...");
        
        /* Call API endpoint(s)  */
        //deleteStudent(student.id);
        //onSubmit();

        resetForm();
        toggleDeleteModal();
    }

    const resetForm = () => setStudent({});

    const onDeleteClick = () => {
        //if user  invalid
        if (!student?.id) return toast.warn("Please select a student");
        toggleDeleteModal();
    }

    const toggleDeleteModal = () => setModal(!modal);
    
    return (
        <>
            <CustomFormWrapper title="Manage Students" onDelete={onDeleteClick} onReset={resetForm} onSave={onSave}>
                <Form>
                    <div class="row">
                        <div class="col">
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    value={student?.firstName || ""}
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
                                    value={student?.lastName}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <FormGroup>
                                <Label for="contactPerson">Contact Person</Label>
                                <Input
                                    id="contactPerson"
                                    type="text"
                                    value={student?.contactPerson || ""}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                        <div class="col">
                            <FormGroup>
                                <Label for="contactNo">Contact No.</Label>
                                <Input
                                    id="contactNo"
                                    type="text"
                                    value={student?.contactNo || ""}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <FormGroup>
                                <Label for="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={student?.email || ""}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                        <div class="col">
                            <FormGroup>
                                <Label for="dob">Date of Birth</Label>
                                <Input
                                    id="dob"
                                    type="date"
                                    value={student?.dob || ""}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <FormGroup>
                                <Label for="age">Age</Label>
                                <Input
                                    id="age"
                                    readOnly
                                    value={(student?.dob && DateTime.now().diff(DateTime.fromFormat(student.dob, 'yyyy-MM-dd')).toFormat("yy")) || "-"}
                                />
                            </FormGroup>
                        </div>
                        <div class="col">
                            <FormGroup>
                                <Label for="classroom">Classroom</Label>
                                <Input
                                    id="classroom"
                                    type="select"
                                    value={student?.classroom}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled selected hidden>Please Choose...</option>
                                    {classrooms && classrooms.map(classroom => <option key={classroom.id} value={classroom.name}>{classroom.name}</option>)}
                                </Input>
                            </FormGroup>
                        </div>
                    </div>
                </Form>
            </CustomFormWrapper>
            <ToastContainer />
            <Modal isOpen={modal} toggle={toggleDeleteModal}>
                <ModalHeader toggle={toggleDeleteModal}>Are you sure?</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete a student? You cannot undo this
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onDeleteUserConfirmed}>Yes</Button>{' '}
                    <Button color="secondary" onClick={toggleDeleteModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default StudentForm;