import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion as m } from "framer-motion";
import logo from "./images/logo-sample.png";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import ErrorPage from "./pages/ErrorPage";
import ForgotPassword from "./pages/ForgotPassword";
import AnimatedPage from './pages/AnimatedPage'



function App() {
  return (
    <>
    <AnimatedPage>
      <BrowserRouter>
        <m.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="the-logo"
        >
          <Navbar className="navbar-logo" bg="transparent" variant="light">
            <Container className="navbar-logo2">
              <Link to="/">
                <img
                  alt=""
                  src={logo}
                  width="60"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
              </Link>
              <Navbar.Brand>Diego Real Estate Reporting</Navbar.Brand> <br></br>
              <Container className="login">
                <div className='login'>
                  <Link to="login">
                    <Button type="submit" className="btn btn-primary mb-3">
                      Login
                    </Button>
                  </Link>
                
                
                  <Link to="register">
                    <Button type="submit" className="btn btn-success mb-3">
                      Register
                    </Button>
                  </Link>
                </div>
              </Container>
            </Container>
          </Navbar>
        </m.section>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="links"
        >
          <Link className="link-button" to="page1">
            <Button>Page1</Button>
          </Link>
          <Link className="link-button" to="page2">
            <Button>Page2</Button>
          </Link>
          <Link className="link-button" to="page3">
            <Button>Page3</Button>
          </Link>
          <Link className="link-button" to="page4">
            <Button>Page4</Button>
          </Link>
          <Link className="link-button" to="page5">
            <Button>Page5</Button>
          </Link>
          <Link className="link-button" to="page6">
            <Button>Page6</Button>
          </Link>
          <Link className="link-button" to="page7">
            <Button>Page7</Button>
          </Link>
        </m.div>

        

        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="page4" element={<Page4 />} />
            <Route path="page5" element={<Page5 />} />
            <Route path="page6" element={<Page6 />} />
            <Route path="page7" element={<Page7 />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>
      </AnimatedPage>
    </>
  );
}

export default App;
