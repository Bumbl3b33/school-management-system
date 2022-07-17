import { Card, CardFooter, CardHeader, CardBody, Table, Button } from "reactstrap";

const CustomTable = ({ title, table, buttonHandler, buttonText }) => {
  return (
    <>
      <Card>
        <CardHeader>{title || "No title"}</CardHeader>
        <CardBody>
          <Table striped>
            <thead>
              <tr>
                {table && Object.keys(table[0]).map((key) => <th> {key} </th>)}
                {buttonHandler && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {table &&
                table.map((object) => (
                  <tr>
                    {Object.values(object).map((value) => (
                      <td>{value}</td>
                    ))}
                    {buttonHandler && (
                      <td>
                        {/* object.id is a unique identifier that is passed into the onclick event*/}
                        <Button id={object.id} onClick={buttonHandler}>
                          {buttonText}
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

export default CustomTable;
