import { Card, CardBody, CardHeader, Button } from "reactstrap";
import NavigationBar from "../../components/navbar/NavigationBar";

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <p style={{fontWeight:'bold'}}>
                Welcome to MySchool!
            </p>

        </div>
    )
}

export default Home;