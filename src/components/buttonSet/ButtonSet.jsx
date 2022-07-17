import { Button } from "reactstrap";

const ButtonSet = ({ onSave, onDelete, onReset }) => {
  return (
    <div class="container">
      <div class="row">
        {onSave && <div class="col-1"><Button onClick={onSave} color="success">Save </Button></div>}
        {onDelete && <div class="col-1"> <Button onClick={onDelete} color="danger">Delete</Button></div>}
        {onReset && <div class="col-1"> <Button onClick={onReset} color="warning">Reset</Button></div>}
      </div>
    </div>
  );
};

export default ButtonSet;
