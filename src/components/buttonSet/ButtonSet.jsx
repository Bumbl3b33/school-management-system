import { Button } from "reactstrap";

const ButtonSet = ({onSave, onDelete, onReset}) => {
  return (
    <div>
      {onSave && <Button onClick={onSave} color="success">Save </Button>}
      {onDelete && <Button onClick={onDelete} color="danger">Delete</Button>}
      {onReset && <Button onClick={onReset} color="warning">Reset</Button>}
    </div>
  );
};

export default ButtonSet;
