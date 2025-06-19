import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/navigation.css";
import { NavbarBrand, NavbarOffcanvas, NavbarToggle, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";



function Navigation({ activekey }) {
  return (
    <>
    <header>
    {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
      <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark" fixed="top" className="bg-light mb-3">
        <Container fluid>
          <NavbarBrand to="/" className="text-uppercase">
            <span className="h5 mb-0 ms-5">John Doe</span>
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
              <NavLink to="/" activekey={activekey} eventkey="home" className="nav-link-item accueil">Accueil</NavLink>
              <NavLink to="/Services" activekey={activekey} eventkey="services" className="nav-link-item services">Services</NavLink>
              <NavLink to="/Realisations" activekey={activekey} eventkey="realisations" className="nav-link-item realisations">Réalisations</NavLink>
              <NavLink to="/Blog" activekey={activekey} eventkey="blog" className="nav-link-item blog">Blog</NavLink>
              <NavLink to="/Contact" activekey={activekey} eventkey="contact" className="nav-link-item contact">Me contacter</NavLink>
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