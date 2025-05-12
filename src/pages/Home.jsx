import Footer from "../components/Footer";
import Button from 'react-bootstrap/Button';
import Navigation from "../components/Navigation";
import "../styles/home.css";
import { CardBody, CardGroup, Col, Container } from "react-bootstrap";



function Home() {
    return (
      <>
        <Navigation />
          <div className="info-container"></div>
          <div className="info-container-black"></div>
          <Container fluid className="d-flex flex-column justify-content-center align-items-center">
          <Col className="col">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <Button variant="primary" href="#a_propos" className="p-2 mx-auto">En savoir plus</Button>
          </Col>
          <CardGroup className="card-group mb-5 m-auto py-4 shadow p-4 rounded">
            <CardBody className="card propos col-md-2 border border-0">
              <h3 id="a_propos">À propos</h3>
              <hr />
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai
                suivi une formation <b>d'intégrateur-développeur web</b> au CEF.
                Au cours de cette formation, j'ai pu acquérir des bases solides
                pour travailler dans le domaine du <b>développement web.</b>
              </p>
              <p>
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une
                agence digitale pour consolider ma formation de{" "}
                <b>développeur web full stack.</b>
              </p>
              <p>
                J'accorde une attention particulière à la qualité du code que
                j'écris et je respecte les bonnes pratiques du web.
              </p>
            </CardBody>
            <CardBody className="card card-about col-md-4 border border-0">
            <img
              src="./src/assets/john-doe-about.jpg"
              alt="une photo de John Doe"
              className="about-deskstop"
            ></img>
            <img
              src="./src/assets/john-doe-about.jpg"
              alt="une photo de John Doe"
              className="about-tablette"
            ></img>
            <img
              src="./src/assets/about.jpg"
              alt="une photo de John Doe"
              className="about-mobile"
            ></img>
            <h3>Mes compétences</h3>
            <p className="my-2">HTML 90%</p>
            <div className="progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="my-2">CSS 80%</p>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="my-2">JAVASCRIPT 70%</p>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="my-2">PHP 60%</p>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="my-2">REACT 50%</p>
            <div className="progress">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            </CardBody>
          </CardGroup>
        </Container>
        <Footer />
      </>
    );
  }
  
  export default Home;