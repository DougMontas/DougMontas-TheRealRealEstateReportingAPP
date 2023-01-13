import { Form, Button, Card} from "react-bootstrap";
import {Link} from 'react-router-dom';
import AnimatedPage from './AnimatedPage'


function Register() {

  let regStyle = {
    width: "50%",
    backgroundColor: "rgba(5,5,5,0.8)",
    marginLeft: "25%",
    marginBottom: '5%',
    size: "40px",
    marginTop: '4%',
  };

  return (
    <AnimatedPage>
    <div>
      <Card body style={regStyle}>
        <Form>
        <Form.Group className="mb-6">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

        <Form.Group className="mb-6">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

        <Form.Group className="mb-6">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group className="mb-6">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-6" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

        <Link to='/login'>
        <Button
            style={{textAlign: "center", width:'50%', paddingLeft: '5%', paddingRight:'5%', marginTop:'5%', marginLeft: '25%'}}
            variant="success"
            type="submit"
          >
            Submit
          </Button>
        </Link>
          
        </Form>
      </Card>
    </div>
    
    </AnimatedPage>
  );
}

export default Register;
