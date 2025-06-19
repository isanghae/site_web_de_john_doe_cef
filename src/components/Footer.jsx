 import {Row, Col, Container} from "react-bootstrap";
 import { NavLink } from "react-router-dom";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
 import Chevron from "../assets/chevron.png";
 import "../styles/footer.css";

 function Footer() {
    return (
        <>
        <footer>
        <Container fluid >
            <Row className="footer-container bg-light text-black p-4">
                <Col lg="3" md="6" sm="12" className="footer-content">
                    <h4><strong>John Doe</strong></h4>
                    <address>
                    40 rue Laure Diebold <br />
                    69009 Lyon, France <br />
                    Téléphone: 06 20 30 40 50
                    </address>
                    <ul className="list-inline mt-1">
                        <li className="list-inline-item">
                        <a href="#" title="github" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="me-2" style={{color:"#000000"}} size="2x" />
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="#" title="x" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} className="me-2" size="2x" style={{color:"#000000"}} />
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="#" title="linkedin" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="me-2" size="2x" style={{color:"#000000"}} />
                        </a>
                        </li>
                    </ul>
                </Col>
                <Col lg="3" md="6" sm="12" className="footer-content">
                    <Col className="flex-column">
                    <h4><strong>Liens utiles</strong></h4>
                        <NavLink
                        className="text-body"
                        to="/"
                        target="_blank"
                        style={{fontWeight: "normal"}}
                    >
                    <img src={Chevron} alt="Chevron" style={{ marginRight: '5px', width: '10px', height: '10px', color: "#0d6efd" }} />
                    Accueil <br/>
                        </NavLink>
                        <NavLink
                        className="text-body "
                        to="/"
                        target="_blank"
                        style={{fontWeight: "normal"}}
                    >
                    <img src={Chevron} alt="Chevron" style={{ marginRight: '5px', width: '10px', height: '10px', color: "#0d6efd" }} />
                    A propos <br/>
                        </NavLink>
                        <NavLink
                        className="text-body "
                        to="/Services"
                        target="_blank"
                        style={{fontWeight: "normal"}}
                    >   
                    <img src={Chevron} alt="Chevron" style={{ marginRight: '5px', width: '10px', height: '10px', color: "#0d6efd" }} />
                    Services <br/>
                        </NavLink>
                        <NavLink
                        className="text-body "
                        to="/Contact"
                        target="_blank"
                        style={{fontWeight: "normal"}}
                    >
                    <img src={Chevron} alt="Chevron" style={{ marginRight: '5px', width: '10px', height: '10px', color: "#0d6efd" }} />
                    Me contacter <br/>
                        </NavLink>
                        <NavLink
                        className="text-body "
                        to="/Mentions"
                        target="_blank"
                        style={{fontWeight: "normal"}}
                    >
                    <img src={Chevron} alt="Chevron" style={{ marginRight: '5px', width: '10px', height: '10px', color: "#0d6efd" }} />
                    Mentions légales
                        </NavLink>
                    </Col>
                </Col>
                <Col lg="3" md="6" sm="12" className="footer-content">
                    <Col className="flex-column">
                    <h4><strong>Mes dernières réalisations</strong></h4>
                        <NavLink
                        className="text-body "
                        target="_blank"
                        to="/Realisations"
                        style={{fontWeight: "normal"}}
                    >
                    <img src={Chevron} alt="Chevron" style={{ marginRight: '5px', width: '10px', height: '10px', color: "#0d6efd" }} />
                    Fresh food <br/>
                        </NavLink>
                        <NavLink
                        className="text-body "
                        target="_blank"
                        to="/Realisations"
                        style={{fontWeight: "normal"}}
                        >
                    <img src={Chevron} alt="Chevron" style={{ marginRight: '5px', width: '10px', height: '10px', color: "#0d6efd" }} />
                    Restaurant Akira <br/>
                        </NavLink>
                        <NavLink
                        className="text-body "
                        target="_blank"
                        to="/Realisations"
                        style={{fontWeight: "normal"}}
                    >
                    <img src={Chevron} alt="Chevron" style={{ marginRight: '5px', width: '10px', height: '10px', color: "#0d6efd" }} />
                    Espace bien-être <br/>
                        </NavLink>
                    </Col>
                </Col>
                <Col lg="3" md="6" sm="12" className="footer-content">
                    <Col className="flex-column">
                    <h4><strong>Mes derniers articles</strong></h4>
                        <NavLink
                        className="text-body "
                        target="_blank"
                        to="/Blog"
                        style={{fontWeight: "normal"}}
                    >
                    <img src={Chevron} alt="Chevron" style={{ marginRight: '5px', width: '10px', height: '10px', color: "#0d6efd" }} />
                    Coder son site en HTML/CSS <br/>
                        </NavLink>
                        <NavLink
                        className="text-body "
                        target="_blank"
                        to="/Blog"
                        style={{fontWeight: "normal"}}
                    >
                    <img src={Chevron} alt="Chevron" style={{ marginRight: '5px', width: '10px', height: '10px', color: "#0d6efd" }} />
                    Vendre ses produits sur le web <br/>
                        </NavLink>
                        <NavLink
                        className="text-body "
                        target="_blank"
                        to="/Blog"
                        style={{fontWeight: "normal"}}
                    >
                    <img src={Chevron} alt="Chevron" style={{ marginRight: '5px', width: '10px', height: '10px', color: "#0d6efd" }} />
                    Se positionner sur Google <br/>
                        </NavLink>
                    </Col>
                </Col>
            </Row>
            <Row lg="2" className="copyright-top">
                <div
                className="text-end p-3 text-white"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.911)" }}
                >
                © Designed by John Doe
                </div>
                <div
                className="top-page text-end p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.911)" }}
                >
                <a href="#top" className="haut">Haut de page ↑</a>
                </div>
            </Row>
            </Container>
            </footer>
        </>
     );
 }

export default Footer;