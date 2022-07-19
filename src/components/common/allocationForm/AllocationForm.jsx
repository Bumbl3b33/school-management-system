import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import CustomFormWrapper from "../customFormWrapper/CustomFormWrapper";

const AllocationForm = ({ title, label, options, onAllocate}) => {

    const [selection, setSelection] = useState();

    const handleChange = (event) => setSelection(event.target.value)
    const onAllocateClick = () => onAllocate(selection); 
    return (
        <CustomFormWrapper
            title={title}
        >
            <Form>
                <div class="row">
                    <div class="col-3">
                        <FormGroup>
                            <Label for="name">{label}</Label>
                            <Input
                                id="name"
                                type="select"
                                value={selection}
                                onChange={handleChange}
                            >
                                <option value="" disabled selected hidden>Please Choose...</option> 
                                {options &&
                                    options.map((option, index) => (
                                        <option key={index} value={option.id}>{option.name}</option>
                                    ))}
                            </Input>
                        </FormGroup>
                        <Button color="success" onClick={onAllocateClick}>Allocate</Button>
                    </div>
                </div>
            </Form>
        </CustomFormWrapper>
    )
}

export default AllocationForm;