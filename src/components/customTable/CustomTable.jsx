import { Card, CardFooter, CardHeader, CardBody, Table } from "reactstrap";

const CustomTable = ({ title, table }) => {
  
  return (
    <>
      <Card>
        <CardHeader>{title || "No title"}</CardHeader>
        <CardBody>
          <Table striped>
            <thead>
              <tr>
                {table && Object.keys(table[0]).map((key) => (
                  <th> {key} </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table && table.map((object) => (
                <tr>
                  {Object.values(object).map((value) => (
                    <td>{value}</td>
                  ))}
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
