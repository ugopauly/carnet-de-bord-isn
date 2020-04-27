import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Image, Navbar, Nav, Container } from 'react-bootstrap';
import "./header.css"


const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Navbar className="bg-light" variant="light" expand="md" fixed="top" >
        <Navbar.Brand href="/">
            <Image src="/images/logo.svg" width="40" height="40" class="d-inline-block align-top" alt="" rounded/>
            {' '} {siteTitle}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul">
            <Nav.Item as="li">
              <Link to="projet" className="nav-link" activeClassName="active">Projet</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="contact" className="nav-link" activeClassName="active">Contact</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
