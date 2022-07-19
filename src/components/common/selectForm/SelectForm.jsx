import CustomFormWrapper from "../customFormWrapper/CustomFormWrapper"
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";

const SelectForm = ({title, label, options, onSelect, onSave }) => {

    const [selection, setSelection] = useState({});

    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setSelection((values) => ({ ...values, [name]: value }));
        onSelect(event.target.value);
    };

    return (
        <CustomFormWrapper
            title={title}
            onSave={onSave}
        >
            <Form>
                <div class="row">
                    <div class="col-3">
                        <FormGroup>
                            <Label for="selectionId">{label}</Label>
                            <Input
                                id="selectionId"
                                type="select"
                                value={selection.id}
                                onChange={handleChange}
                            >
                                <option value="" disabled selected hidden>Please Choose...</option> 
                                {options &&
                                    
                                    options.map((selection, index) => (
                                        <option key={index} value={selection.id}>
                                        {selection.firstName + " " + selection.lastName}
                                    </option>
                                    
                                    ))}
                            </Input>
                        </FormGroup>
                    </div>
                </div>
            </Form>
        </CustomFormWrapper>
    )

}

export default SelectForm;