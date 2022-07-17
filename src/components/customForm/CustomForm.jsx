import ButtonSet from "../buttonSet/ButtonSet";
import { Card, CardFooter, CardHeader, CardBody, Form } from "reactstrap";

const CustomForm = ({ children, title, onSave, onReset, onDelete }) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <Form>
          {children}
        </Form>
        <ButtonSet onSave={onSave} onDelete={onDelete} onReset={onReset} />
      </CardBody>
    </Card>
  );
};

export default CustomForm;
