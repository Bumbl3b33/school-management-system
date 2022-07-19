import { Card, CardHeader, CardBody, Form } from "reactstrap";
import CustomButtonGroup from "../customButtonGroup/CustomButtonGroup";

const CustomForm = ({ children, title, onSave, onReset, onDelete }) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <Form>
          {children}
        </Form>
        <CustomButtonGroup onSave={onSave} onDelete={onDelete} onReset={onReset} />
      </CardBody>
    </Card>
  );
};

export default CustomForm;
