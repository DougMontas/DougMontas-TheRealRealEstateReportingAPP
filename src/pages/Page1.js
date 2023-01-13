import { Carousel } from 'react-bootstrap';
import { motion as m } from 'framer-motion';
import AnimatedPage from './AnimatedPage'

function Page1() {
  let test = {
    display: "grid",
    // border: '2px solid black',
    gap: "5%",
    gridTemplateColumns: "1fr 1fr",
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "7%",
  };

  let test1 = {
    border: "2px solid black",
    marginLeft: "2%",
    // backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: '4%',
  };

  let carouselStyle = {
    justifyContent:'center',
    height: '400px',
  }
  // ______________________________


  let test2 = {
    border: "2px solid black",
    marginLeft: "2%",
    backgroundColor: "rgba(235, 235, 235, 0.8)",
    borderRadius: '4%',
  };

  return (
    <AnimatedPage>
    <div style={test}>
      <div style={test1}>
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="child"
      >
        <Carousel style={carouselStyle} fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/48/300/200"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/48/300/200"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/48/300/200"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </m.section>

      <m.section className="child-two">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/48/300/200"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/48/300/200"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/48/300/200"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </m.section>

      </div>
      <div style={test2}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil dolor
        vitae aspernatur? Libero minima distinctio atque, voluptatibus excepturi
        ducimus provident architecto odit repudiandae temporibus expedita.
      </div>
    </div>
    </AnimatedPage>
  );
}

export default Page1;
