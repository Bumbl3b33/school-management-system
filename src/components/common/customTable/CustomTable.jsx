import { Table, Button } from "reactstrap";
import TableHeader from "../../../utils/tableHeader/TableHeader"
const CustomTable = ({ table, buttonHandler, buttonText }) => {
  return (
    <Table striped>
      <thead>
        <tr>
          
          {table &&
            <>
              {Object.keys(table[0]).map((key, index) => <th key={index}> {TableHeader(key)} </th>)}
              {buttonHandler && <th>Action</th>}
            </>}
        </tr>
      </thead>
      <tbody>
        {table &&
          table.map((object, index) => (
            <tr key={index}>
              {Object.values(object).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
              {buttonHandler && (
                <td>
                  {/* object.id is a unique identifier for the row that is passed into the onclick event*/}
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
