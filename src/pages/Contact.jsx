import { Card, CardGroup, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";


function Contact() {
    return (
      <>
        <Navigation />
        <Container className="container m-5 d-flex row justify-content-center align-items-start shadow p-3 bg-white rounded">
          <div className="titres text-center">
            <h1 className="text-uppercase" style={{marginTop: "20px"}}>Me contacter</h1>
            <span>
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact.
            </span>
            <hr className="mx-auto" style={{color: "#0d6efd", width:"300px"}}/>
          </div>
          <CardGroup className="card-group m-1 d-flex flex-row justify-content-center align-items-start p-3 bg-white rounded border border-0 col-12 gap-5">
            <Card className="card border border-0">
              <h2>Formulaire de contact</h2>
              <hr />
              <form id="contactForm">
                <div className="mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Votre adresse email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    id="tel"
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    id="sujet"
                    type="text"
                    placeholder="Sujet"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Votre message"
                    style={{ height: "10rem" }}
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" type="submit">
                    Envoyer
                  </button>
                </div>
              </form>
            </Card>
            <Card className="card col-md-5 border border-0">
              <h2>Mes coordonnées</h2>
              <hr />
              <address>
                <i className="bi bi-geo-alt-fill">
                  40 rue Laure Diebold, 69009 Lyon, France
                </i>
                <br />
                <i className="bi bi-phone">06 20 30 40 50</i>
              </address>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540724!2d4.796403976211973!3d45.778665712402145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1734097720933!5m2!1sfr!2sfr"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>
          </CardGroup>
        </Container>
        <Footer />
      </>
      );
  }
  export default Contact;