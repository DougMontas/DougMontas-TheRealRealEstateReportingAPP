import { useNavigate } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import AnimatedPage from './AnimatedPage'


function ErrorPage() {
  let navigate = useNavigate();
  return (
    <>
    <AnimatedPage>
      <Alert
        variant="dark"
        style={{
          textAlign: "center",
          marginTop: "3%",
          backgroundColor: "rgba(255, 25, 25, 0.8)",
          width: "50%",
          marginLeft: "30%",
        }}
      >
        <h1>You've reached an ErrorPage</h1>
        <h3>Click below to navigate home</h3>
        <Button onClick={() => navigate("/")}>Home</Button>
      </Alert>
      </AnimatedPage>
    </>
  );
}

export default ErrorPage;
