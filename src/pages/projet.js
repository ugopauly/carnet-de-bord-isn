import React from "react"

import "./projet.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Image, Container, Row, Col, Card } from "react-bootstrap"

const SecondPage = () => (
  <div className="background-projet">
    <Layout>
    <SEO title="Projet" />
    <h1 class="display-3">Le Projet de l'Alma</h1>
    <h6>faire un site web pour le cinéma et pour la radio</h6>
    <br/>
    <h1><span role="img" aria-label="emoj"> 👷 </span></h1>
    <Container>
      <h5 class="font-weight-normal">Le professeur a proposé comme idée de projet de refaire le site web de l'Alma.
        J'ai été aguiché par cette optique. J'ai apprecié créer un <a href="https://ugopauly.github.io/isn/" target="blank" >site web</a> avec <kbd>HTML5</kbd> et <kbd>CSS3</kbd></h5> 
      <br/>
      <p class="lead">Le site web de l'Alma ressemblait à ça:</p>
      <Row>
        <Col>
          <Card>
            <Card.Img className="image" variant="top" src="images/cin.png" />
            <Card.Body>
              <Card.Text>
                La page du Cinéma de l'Alma
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img className="image" variant="top" src="images/rad.png" />
            <Card.Body>
              <Card.Text>
                La page de la Radio Clin d'Oeil
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr/>
      <br/>
      <h1 class="display-4">Nouvelles technologies</h1>
      <h6>prise en main et ajout de différentes technologies du développement web</h6>
      <br/>
      <hr/>
      <br/>
      <h1 class="display-5">| Gatsby |</h1>
      <Image className="Image" src="images/gatsbylogo.png" width="50" height="50" class="d-inline-block align-top" />
      <br/>
      <p class="lead">On allait donc refaire ce site web mais en utilisant <kbd>Gatsby.js</kbd></p>
      <div style={{marginRight: `3.5em`, marginLeft: `3.5em` }}>
        <Card>
          <a href="https://www.gatsbyjs.org/" target="blank" ><Card.Img src="images/gatsb.png" variant="top" rounded /></a>
          <Card.Body>
            <Card.Text>
              <kbd>Gatsby</kbd> est un générateur de site statique
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br/>
      <p class="lead">Le nouveau site de l'Alma sera donc un <i>site statique</i>, il y a plusieurs avantages à cela: <strong>vitesse</strong>, <strong>sécurité</strong>, <strong>gestion du trafic</strong>, <strong>contrôle</strong>, ...</p>
      <hr/>
      <br/>
      <h1 class="display-5">| React |</h1>
      <h1><span role="img" aria-label="emoj"> ⚛️ </span></h1>
      <br/>
      <p class="lead"><kbd>Gatsby</kbd> est basé sur du <kbd>React.js</kbd> : une bibliothèque Javascript conçue par <strong>Facebook</strong></p>
      <Card>
        <a href="https://fr.reactjs.org/" target="blank" ><Card.Img src="images/react.png" rounded/></a> 
      </Card>
      <br/>
      <div style={{marginRight: `3.5em`, marginLeft: `3.5em` }}>
        <Card>
          <Card.Img variant="top" src="images/tete.png" />
          <Card.Body>
            <Card.Text>
              La page que vous êtes en train de lire en ce moment utilise la technologie <kbd>React.js</kbd>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br/>
      <br/>
      <p class="lead"><kbd>React</kbd> permet de faire le site web a partir de composants</p>
      <Row>
        <Col style={{marginTop:`1.5em`}}>
          <Card>
            <Card.Img src="images/compo.png" variant="" rounded />
            <Card.Body>
              <Card.Text>
                Les <code>src/pages</code> sont créées à partir de <code>src/components</code> 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={7} style={{marginTop:`1.5em`}}>
          <Card>
            <Card.Img src="images/import.png" variant="" rounded />
            <Card.Body>
              <Card.Text>
                Ici la <code>src/pages/projet.js</code> est créée à partir de <code>src/components/layout</code> 
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          <Card>
            <Card.Body>On observe non seulement l'<strong>import</strong> de <code>components</code> mais également de <i>deux autres technologies</i>
            <br/> La première <code>projet.css</code> est <strong>une page de style</strong> en <kbd>CSS</kbd> 
            <br/> La deuxième est <strong>une suite d'objets</strong> venus de <code>react-bootstrap</code>. Nous allons nous interesser plus précisement à cette technologie.  
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr/>
      <br/>
      <h1 class="display-5">| Bootstrap |</h1>
      <Image className="Image" src="images/bootlogo.png" width="70" height="70" class="d-inline-block align-top" />
      <br/>
      <h4 class="font-weight-normal">Bootstrap est une bibliothèque HTML, CSS et Javascript</h4>
      <br/>
      <p class="lead">On a fait le nouveau site de l'Alma en utilisant des codes <kbd>Bootstrap</kbd></p>
      <Row>
        <Col md={3} xs={5} style={{marginTop:`1.5em`}}>
          <Card>
          <a href="https://getbootstrap.com/docs/4.0/components/card/" target="blank" ><Card.Img src="images/botcomp.png" variant="" rounded /></a>
          </Card>
        </Col>
        <Col md={9} xs={7} style={{marginTop:`1.5em`}}>
          <Card>
            <Card.Body>
              <p class="lead">
              Pour mon carnet de bord j'ai utilisé <code>react-bootstrap</code>, une version remodelée pour l'utiliser avec <kbd>React</kbd>
              <br/>Pour le site de l'Alma on a utilisé la version normale, qui marche tout aussi bien</p>
            </Card.Body>
          </Card>
          <br/>
          <Card>
            <Card.Img src="images/card.png" variant="" rounded />
            <Card.Body>
              <Card.Text>
                Juste ici, j'ai utilisé des objets <kbd>Bootstrap</kbd> c'est à dire <code>Row</code> et <code>Col</code> pour créer un systeme de grille
                et <code>Card</code> pour créer cette bordure blanche arrondie
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </Layout>
  </div>

)

export default SecondPage
