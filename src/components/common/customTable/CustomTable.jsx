import { Table, Button } from "reactstrap";

const CustomTable = ({table, buttonHandler, buttonText }) => {
  return (
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
  );
};

export default CustomTable;
