import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import "./footer.css"

const Footer = () => (
    <footer className="bg-light">
        <Container className="bg" fluid variant="light">
          <Row>
            <Col className="marg" md="6">
              <h5 class="lead" className="title">Carnet De Bord</h5>
              <p>
                Site web réalisé pour le projet de fin d'année d'ISN de Terminale.
              </p>
            </Col>
            <Col className="marg" md="6">
              <h5 class="lead" className="title">Pages</h5>
              <ul class="list-group list-group-horizontal">
                <li className="list-unstyled">
                  <Link to="/" className="nav-link" >Accueil</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="projet" className="nav-link" >Projet</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="contact" className="nav-link" >Contact</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
        <Container fluid class="lead">
          &copy; {new Date().getFullYear()} Copyright: <a href="mailto:ugo.pauly31@gmail.com" target="blank" >Ugo P.</a>
        </Container>
      </div>
    </footer>
)

export default Footer

