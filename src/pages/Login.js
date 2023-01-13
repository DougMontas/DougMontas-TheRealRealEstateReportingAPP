import { Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AnimatedPage from './AnimatedPage'

function Login() {
  let navigate = useNavigate();

  let logStyle = {
    width: "50%",
    backgroundColor: "rgba(5,5,5,0.8)",
    marginLeft: "25%",
    size: "40px",
    marginTop: "4%",
  };

  return (
    <AnimatedPage>
    <Card body style={logStyle}>
      <Form>
        <Form.Group className="something">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mt-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button
          style={{ marginTop: "5px", marginBottom: "2%", marginLeft:'5%'}}
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      
        <Link
          to="/forgotpassword"
          style={{ marginLeft: "5%", marginTop: "5%", textAlign: "center" }}
        >
          Forgot Password?
        </Link>
        
      </Form>
    </Card>
    </AnimatedPage>
  );
}

export default Login;
