import { Card, CardBody, CardGroup, CardText, CardTitle, Col, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Ordinateur from "../assets/services/ordinateur.png";
import Developpement from "../assets/services/développement.png";
import Referencement from "../assets/services/referencement.png";

function Services() {
    return (
      <>
        <Navigation />
        <Container fluid className="services-container d-flex row justify-content-center align-items-start p-3">
          <Col className="titres text-center">
            <h1 className="text-uppercase" style={{marginTop: "50px"}}>Mon offre de services</h1>
            <span>
              Voici les prestations sur lesquelles je peux intervenir.
            </span>
            <hr className="mx-auto" style={{color: "#0d6efd", width:"300px"}}/>
          </Col>
          <CardGroup className="card-group">
            <Card className="card pt-3 border-0 shadow p-2 rounded" style={{marginRight: "10px"}}>
              <img
                className="card-img-top-services mx-auto"
                src={Ordinateur}
                alt="icone d'ordinateur"
                style={{ width: "100px", height: "100px" }}
              ></img>
              <CardBody className="card-body-services text-center">
                <h2 className="card-title-services">UX Design</h2>
                <p className="card-text-services">
                  <b>L'UX Design</b> est une méthode de conception centrée
                  sur l'utilisateur. Son but est d'offrir une expérience de
                  navigation optimale à l'internaute.
                </p>
              </CardBody>
            </Card>

            <Card className="card pt-3 border-0 shadow p-2 rounded" style={{marginRight: "10px"}}>
              <img
                className="card-img-top-services mx-auto"
                src={Developpement}
                alt="icone web"
                style={{ width: "100px", height: "100px" }}
              ></img>
              <CardBody className="card-body-services text-center">
                <CardTitle className="card-title-services">Développement Web</CardTitle>
                <CardText className="card-text-services">
                  <b>Le développement de sites web</b> repose sur
                  l'utilisation des langages{" "}
                  <abbr title="HyperText Markup Language">HTML</abbr>,{" "}
                  <abbr title="Cascading Style Sheets">CSS</abbr>,
                  JavaScript et{" "}
                  <abbr title="Hypertext Preprocessor">PHP</abbr>.
                </CardText>
              </CardBody>
            </Card>

            <Card className="card mx-auto pt-3 border-0 shadow p-2 rounded" style={{marginRight: "10px"}}>
              <img
                className="card-img-top-services mx-auto"
                src={Referencement}
                alt="icone de loupe"
                style={{ width: "100px", height: "100px" }}
              ></img>
              <CardBody className="card-body-services text-center">
                <CardTitle className="card-title-services">Référencement</CardTitle>
                <CardText className="card-text-services">
                  <b>Le référencement naturel d'un site</b> aussi appelé
                  SEO, consiste à mettre des techniques en oeuvre pour{" "}
                  <i>améliorer sa position</i> dans les résultats des
                  moteurs de recherche.
                </CardText>
              </CardBody>
            </Card>
          </CardGroup>
          </Container>
        <Footer />
      
      </>
    );
  }
  export default Services;