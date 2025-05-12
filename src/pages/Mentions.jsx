import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Accordion, AccordionBody, AccordionCollapse, AccordionHeader, AccordionItem, Card, Container } from "react-bootstrap";


function Mentions() {
    return (
      <>
      <Navigation />
      <Container fluid className="background">
      <h1 className="text-uppercase text-center">Mentions légales</h1>
      <hr className="mx-auto" style={{color: "#0d6efd", width:"300px"}}/>
      <Card className="card border border-0 d-flex row justify-content-center align-items-around flex-nowrap p-3 bg-white rounded">
        <Accordion className="accordion">
          <AccordionItem className="accordion-item">
            <AccordionHeader className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Editeur du site
              </button>
            </AccordionHeader>
            <AccordionCollapse
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              
            >
              <AccordionBody className="accordion-body">
                <h3>John Doe</h3>
                <address>
                  ⌂ 40 rue Laure Diebold, 69009 Lyon, France
                  <a href="tel:0620304050">☎ 06 20 30 40 50</a>
                  <a href="john.doe@gmail.com">✉ john.doe@gmail.com</a>
                </address>
              </AccordionBody>
            </AccordionCollapse>
          </AccordionItem>
          <AccordionItem className="accordion-item">
            <AccordionHeader className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </AccordionHeader>
            <AccordionCollapse
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <AccordionBody className="accordion-body">
                <h3>Always Data</h3>
                <address>
                  ⌂ 91 rue du Faubourg Saint Honoré <br />
                  75008 Paris
                  <a href="www.alwaysdata.com" target="_blank">
                    🌐 www.alwaysdata.com
                  </a>
                </address>
              </AccordionBody>
            </AccordionCollapse>
          </AccordionItem>
          <AccordionItem className="accordion-item">
            <AccordionHeader className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </AccordionHeader>
            <AccordionCollapse
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <AccordionBody className="accordion-body">
                <h3>Crédits</h3>
                <p>Site développé par John Doe, étudiant du CEF</p>
                <p>
                  Les images libre de droit sont issues du site{" "}
                  <a href="https://pixabay.com/fr/">Pixabay</a>
                </p>
              </AccordionBody>
            </AccordionCollapse>
          </AccordionItem>
        </Accordion>
      </Card>
      </Container>
      <Footer />
      </>
      );
  }
  export default Mentions;