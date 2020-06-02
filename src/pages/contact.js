import React from "react"

import "./contact.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Particles from 'react-particles-js';
import {  Form, Button } from "react-bootstrap";

const particleOpt = {
  particles : {
    number : {
      value: 150,
      density: {
        enable: true, 
        value_area: 500
      }
    }
  }
}


const SecondPage = () => (
  <div className="background-contact">
    <Layout>
      <SEO title="Contact" />
      <h1 class="display-3">Contact</h1>
      <h6>faites moi part de vos remarques</h6>
      <br/>
      {/* <blockquote class="blockquote text-center">
        <Image className="Image" src="/images/photo.jpg" width="100" height="100" class="d-inline-block align-top" alt="" roundedCircle />
        <footer class="blockquote-footer">Le créateur</footer>
      </blockquote> */}
      <a href="mailto:ugo.pauly31@gmail.com" target="blank"><h2 class="font-weight-light">ugo.pauly31@gmail.com</h2></a>
      <Particles params={particleOpt}/>
      <br/>
      {/* <a href="https://www.google.com/maps/place/Centre+International+de+Valbonne/@43.6215604,7.0414742,17z/data=!4m8!1m2!2m1!1sciv!3m4!1s0x12cc2baf9dc2bed5:0xafd31854dd8ae208!8m2!3d43.6215604!4d7.0414742">
      <Image src="/images/maps.png" rounded fluid />
      </a> */}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Adresse email</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre email" />
          <Form.Text className="text-muted">
            Votre email ne sera pas divulgué.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Votre message</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Ecrivez votre message ici"/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="J'ai lu et j'accepte la politique de confidentialité" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Envoyer !
        </Button>
      </Form>
    </Layout>
  </div>
)

export default SecondPage
