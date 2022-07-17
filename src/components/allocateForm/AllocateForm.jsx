import { Table, Card, CardBody, CardHeader, Form, Button } from "reactstrap";
const AllocateForm = ({ children, formTitle,tableTitle , table, onDeallocate, onAllocate }) => {
  return (
    <>
      <Card>
        <CardHeader>{formTitle || 'Form'}</CardHeader>
        <CardBody>
          <Form>{children}</Form>
          {onAllocate && <Button onClick={onAllocate}>Allocate</Button>}
        </CardBody>
      </Card>
      <Card>
      <CardHeader>{tableTitle || 'Table'}</CardHeader>
        <CardBody>
          <Table striped>
            <thead>
              <tr>
                {table && Object.keys(table[0]).map((key) => <th> {key} </th>)}
                {onDeallocate && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {table &&
                table.map((object) => (
                  <tr>
                    {Object.values(object).map((value) => (
                      <td>{value}</td>
                    ))}
                    {onDeallocate && (
                      <td>
                        {/* object.id is a unique identifier that is passed into the onclick event*/}
                        <Button id={object.id} onClick={onDeallocate}>
                          Deallocate
                        </Button>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
};

export default AllocateForm;
