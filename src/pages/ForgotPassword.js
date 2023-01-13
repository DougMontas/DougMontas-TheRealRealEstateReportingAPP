import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AnimatedPage from './AnimatedPage'

function ForgotPassword() {
  let forgotStyles = {
    marginLeft: "40%",
    marginTop: "5%",
    height: "30%",
    width: "35%",
    display: "grid",
    gap: "3%",
  };

  let buttonStyles = {
    marginLeft: "40%",
    height: "90%",
    marginBottom: "1%",
  };

  return (
    <AnimatedPage>
    <div style={forgotStyles}>
      <input style={{ color: "black" }} type="text" />

      <h1 style={{ textAlign: "center", borderRadius: "3%" }}>
        Enter your Email Address
      </h1>

      <Link to="/">
        <Button className="mt-2 success" style={buttonStyles}>
          Submit
        </Button>
      </Link>
    </div>
    </AnimatedPage>
  );
}

export default ForgotPassword;
