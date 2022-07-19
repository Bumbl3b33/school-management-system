import { Button, ButtonGroup } from "reactstrap";

const CustomButtonGroup = ({ onSave, onDelete, onReset }) => {
  return (

    <div class="d-flex">
      <ButtonGroup>
      {onSave && <Button onClick={onSave} color="success">Save </Button>}
      {onDelete && <Button onClick={onDelete} color="danger">Delete </Button>}
      {onReset && <Button onClick={onReset} color="warning">Reset </Button>}
      </ButtonGroup>
    </div>
  );
};

export default CustomButtonGroup;
