import { Carousel, Card, Button } from "react-bootstrap";
import { motion as m } from "framer-motion";
import { Link } from 'react-router-dom';
import AnimatedPage from './AnimatedPage'

function Home() {
  return (
  
  <>
  <AnimatedPage>
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="child"
      >
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

      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="child-section"
      >
        <Card style={{ background: "rgba(5,5,5,0.8)" }}>
          <Card.Header>
            <h2 className="section-title"> Section Title Heading</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <div className="text-area">
                <p>
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam voluptatibus, veniam facere nemo error aliquam qui
                  animi voluptas, maxime unde enim quos eum obcaecati expedita
                  optio totam fugit laboriosam voluptatem? Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Aperiam voluptatibus,
                  veniam facere nemo error aliquam qui animi voluptas, maxime
                  unde enim quos eum obcaecati expedita optio totam fugit
                  laboriosam voluptatem?{" "}
                </p>
              </div>
            </Card.Text>
            <Link to='/register'>
            <Button variant="primary">Go somewhere</Button>
            </Link>
          </Card.Body>
        </Card>
      </m.section>

      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="lower-section"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          maiores amet, fuga quae qui, magni, quo soluta officia sint nemo modi
          quisquam non error? Veritatis minima corporis accusamus voluptas
          temporibus ipsam cupiditate, officiis totam ullam maiores atque
          doloribus expedita est voluptatem saepe vitae veniam? Porro recusandae
          doloribus magnam provident. Possimus veniam numquam quas inventore
          ipsa doloremque tempore facere alias rerum nostrum facilis ipsam
          consequatur enim doloribus aliquam voluptas pariatur est repudiandae
          ratione dolores, temporibus similique! Eaque amet earum cumque saepe?
        </p>
      </m.section>

      <m.section>
        <div
          style={{ backgroundColor: "rgba(173, 163, 168, 0.8)" }}
          className="business-card"
        >
          <h3 className="card-title">Real Estate Software</h3>
          <h6 className="tagline-top">by the new up and coming app</h6>
          <h6 className="tagline-bottom">This is for tagline</h6>
          <h5 className="contact-info">Contact Info</h5>
          <h5 className="contact-info">Contact Info</h5>
          <h5 className="contact-info">Contact Info</h5>
          <p className="outro">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit eum
            totam quia quis soluta obcaecati earum mollitia maiores. Nemo, amet.
          </p>
        </div>
      </m.section>
      </AnimatedPage>
    </>
  );
}

export default Home;
