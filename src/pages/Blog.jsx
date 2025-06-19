import Coder from "../assets/blog/coder.jpg";
import Croissance from "../assets/blog/croissance.jpg";
import Google from "../assets/blog/google.jpg";
import Screens from "../assets/blog/screens.jpg";
import Seo from "../assets/blog/seo.jpg";
import Technos from "../assets/blog/technos.png";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Row } from "react-bootstrap";
import "../styles/blog.css";

function Blog() {
  return (
    <>
    <Navigation activekey="blog"/>
    <div className="banners"></div>
    <Container className="m-auto d-flex row justify-content-center align-items-start p-3">
      <div className="titres text-center">
          <h1 className="text-uppercase">Blog</h1>
          <span className="supplement">
            Retrouvez ici quelques articles sur le développement web.
          </span>
      </div>
      <Col className="card-group">
        <Row>
          <Col lg="4" md="6" sm="12">
            <Card className="card mx-3 my-3 mt-3 align-top border gap-3">
              <img
                className="card-img-top"
                src={Coder}
                alt="Card image cap"
              ></img>
              <CardBody className="card-body">
                <CardTitle className="card-title">Coder son site en HTML/CSS</CardTitle>
                <CardText className="card-text">
                  Somme quick example text to build on the card title and make
                  up the bulk of the card's content.
                </CardText>
                <a href="#" target="_blank" className="btn btn-primary">
                  Lire la suite
                </a>
              </CardBody>
              <CardFooter className="card-footer text-muted">
                <time dateTime="2022-08-22">Publié le 22 août 2022</time>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4" md="6" sm="12">
            <Card className="card mx-3 my-3 mt-3 align-top border gap-3">
              <img
                className="card-img-top"
                src={Croissance}
                alt="Card image cap"
              ></img>
              <CardBody className="card-body">
                <CardTitle className="card-title">Vendre ses produits sur le web</CardTitle>
                <CardText className="card-text">
                  Somme quick example text to build on the card title and make
                  up the bulk of the card's content.
                </CardText>
                <a href="#" target="_blank" className="btn btn-primary">
                  Lire la suite
                </a>
              </CardBody>
              <div className="card-footer text-muted">
                <time dateTime="2022-08-20">Publié le 20 août 2022</time>
              </div>
            </Card>
          </Col>
          <Col lg="4"md="6" sm="12">
            <Card className="card mx-3 my-3 mt-3 align-top border gap-3">
              <img
                className="card-img-top"
                src={Google}
                alt="Card image cap"
              ></img>
              <CardBody className="card-body">
                <CardTitle className="card-title">Se positionner sur Google</CardTitle>
                <CardText className="card-text">
                  Somme quick example text to build on the card title and make
                  up the bulk of the card's content.
                </CardText>
                <a href="#" target="_blank" className="btn btn-primary">
                  Lire la suite
                </a>
              </CardBody>
              <CardFooter className="card-footer text-muted">
                <time dateTime="2022-08-01">Publié le 1 août 2022</time>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="6" sm="12">
            <Card className="card mx-3 my-3 mt-3 align-top border gap-3">
              <img
                className="card-img-top"
                src={Screens}
                alt="Card image cap"
              ></img>
              <CardBody className="card-body">
                <CardTitle className="card-title">Coder en responsive design</CardTitle>
                <CardText className="card-text">
                  Somme quick example text to build on the card title and make
                  up the bulk of the card's content.
                </CardText>
                <a href="#" target="_blank" className="btn btn-primary">
                  Lire la suite
                </a>
              </CardBody>
              <CardFooter className="card-footer text-muted">
                <time dateTime="2022-07-31">Publié le 31 juillet 2022</time>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4" md="6" sm="12">
            <Card className="card mx-3 my-3 mt-3 align-top border gap-3">
              <img
                className="card-img-top"
                src={Seo}
                alt="Card image cap"
              ></img>
              <CardBody className="card-body">
                <CardTitle className="card-title">Techniques de référencement</CardTitle>
                <CardText className="card-text">
                  Somme quick example text to build on the card title and make
                  up the bulk of the card's content.
                </CardText>
                <a href="#" target="_blank" className="btn btn-primary">
                  Lire la suite
                </a>
              </CardBody>
              <CardFooter className="card-footer text-muted">
                <time dateTime="2022-07-30">Publié le 30 juillet 2022</time>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4" md="6" sm="12">
            <Card className="card mx-3 my-3 mt-3 align-top border gap-3">
              <img
                className="card-img-top"
                src={Technos}
                alt="Card image cap"
              ></img>
              <CardBody className="card-body">
                <CardTitle className="card-title">Apprendre à coder</CardTitle>
                <CardText className="card-text">
                  Somme quick example text to build on the card title and make
                  up the bulk of the card's content.
                </CardText>
                <a href="#" target="_blank" className="btn btn-primary">
                  Lire la suite
                </a>
              </CardBody>
              <CardFooter className="card-footer text-muted">
                <time datetime="2022-07-12">Publié le 12 juillet 2022</time>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
    <Footer />
    </>
    );
}
export default Blog;