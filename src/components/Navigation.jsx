import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/navigation.css";
import Favicon from "../assets/favicon.png";
import { NavbarBrand, NavbarOffcanvas, NavbarToggle, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";



function Navigation() {
    return (
      <>
      <header>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark" fixed="top" className="bg-light mb-3">
          <Container fluid>
            <NavbarBrand to="/" className="text-uppercase">
              <img 
              src={Favicon}
              alt="Logo" className="me-4" 
              style={{ height: '40px' }} />
              <span className="h5 mb-0">John Doe</span>
            </NavbarBrand>
            <NavbarToggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <NavbarOffcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              data-bs-theme="dark"
            >
              <OffcanvasHeader closeButton>
                <OffcanvasTitle id={`offcanvasNavbarLabel-expand-${expand}`} className="text-uppercase">
                  John Doe
                </OffcanvasTitle>
              </OffcanvasHeader>
              <OffcanvasBody>
                <Nav className="justify-content-end flex-grow-1 pe-3 text-uppercase text-white">
                  <NavLink to="/" className="nav-link-item">Accueil</NavLink>
                  <NavLink to="/Services" className="nav-link-item">Services</NavLink>
                  <NavLink to="/Realisations" className="nav-link-item">Réalisations</NavLink>
                  <NavLink to="/Blog" className="nav-link-item">Blog</NavLink>
                  <NavLink to="/Contact" className="nav-link-item">Me contacter</NavLink>
                </Nav>
              </OffcanvasBody>
            </NavbarOffcanvas>
          </Container>
        </Navbar>
      ))}
      </header>
    </>
  );
} 
  export default Navigation;