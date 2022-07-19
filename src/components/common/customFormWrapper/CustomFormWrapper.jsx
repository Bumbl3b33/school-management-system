import { Card, CardHeader, CardBody, Form } from "reactstrap";
import CustomButtonGroup from "../customButtonGroup/CustomButtonGroup";

const CustomFormWrapper = ({ children, title, onSave, onReset, onDelete }) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody>
          {children}
        <CustomButtonGroup onSave={onSave} onDelete={onDelete} onReset={onReset} />
      </CardBody>
    </Card>
  );
};

export default CustomFormWrapper;
