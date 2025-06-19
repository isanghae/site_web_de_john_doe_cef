import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/realisations.css";
import FreshFood from "../assets/portfolio/fresh-food.jpg";
import BienEtre from "../assets/portfolio/espace-bien-etre.jpg";
import Akira from "../assets/portfolio/restaurant-japonais.jpg";
import { Card, CardBody, CardFooter, CardText, Col, Container, Row } from "react-bootstrap";


function Realisations() {
  return (
    <>
    <Navigation activekey="realisations"/>
    <div className="banners"></div>
    <Container fluid className="background d-flex row justify-content-center align-items-start p-3">
      <Col className="titres text-center">
        <h1 className="text-uppercase">Portfolio</h1>
        <span className="supplement">Voici quelques-unes de mes réalisations.</span>
      </Col>
      <Row>
        <Col lg="4" md="12" sm="12">
          <Card className="card">
            <img
              className="card-img-top"
              src= {FreshFood}
              alt="Card image cap"
            ></img>
            <CardBody className="card-body text-center">
              <h2 className="card-title">Fresh food</h2>
              <CardText className="card-text">
                Réalisation d'un site avec commande en ligne.
              </CardText>
              <a
                href="#"
                target="_blank"
                className="btn btn-outline-primary center"
              >
                Voir
              </a>
            </CardBody>
            <CardFooter className="card-footer text-muted" style={{textAlign: "center"}}>
              <time dateTime="2022-08-22">
                Site réalisé avec PHP et MySQL
              </time>
            </CardFooter>
          </Card>
        </Col>
        <Col lg="4" md="12" sm="12">
          <Card className="card">
            <img
              className="card-img-top"
              src= {Akira}
              alt="Card image cap"
            ></img>
            <CardBody className="card-body text-center">
              <h2 className="card-title">Restaurant Akira</h2>
              <CardText className="card-text">Réalisation d'un site vitrine.</CardText>
              <a
                href="#"
                target="_blank"
                className="btn btn-outline-primary"
              >
                Voir
              </a>
            </CardBody>
            <CardFooter className="card-footer text-muted" style={{textAlign: "center"}}>
              <time dateTime="2022-08-20">
                Site réalisé avec WordPress
              </time>
            </CardFooter>
          </Card>
        </Col>
        <Col lg="4" md="12" sm="12">
          <Card className="card">
            <img
              className="card-img-top"
              src= {BienEtre}
              alt="Card image cap"
            ></img>
            <CardBody className="card-body text-center">
              <h2 className="card-title">Espace bien-être</h2>
              <CardText className="card-text">
                Réalisation d'un site vitrine pour un praticien de
                bien-être.
              </CardText>
              <a
                href="#"
                target="_blank"
                className="btn btn-outline-primary"
              >
                Voir
              </a>
            </CardBody>
            <CardFooter className="card-footer text-muted" style={{textAlign: "center"}}>
              <time dateTime="2022-08-01">Site réalisé en HTML/CSS</time>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
    );
}
  export default Realisations;