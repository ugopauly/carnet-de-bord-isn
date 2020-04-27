import React from "react"

import "./index.css"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Spinner, Button, Accordion, Card, Jumbotron, Alert, Badge } from 'react-bootstrap';
import Particles from 'react-particles-js';

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

const IndexPage = () => (
  <div className="background-index">
    <Layout>
      <SEO title="Accueil" />
      <h1 class="display-3">Mon Carnet de Bord</h1>
      <h6>d'Informatique et Sciences du Numérique</h6>
      <Particles params={particleOpt}/>
      <a href="#accordion"><Button variant="outline-primary">C'est parti !</Button></a>
      {/* <hr/>
      <blockquote class="blockquote text-center">
        <Image className="Image" src="/images/photo.jpg" width="100" height="100" class="d-inline-block align-top" alt="" roundedCircle />
        <footer class="blockquote-footer">Le créateur</footer>
      </blockquote>
      <p class="lead"> « Ne jamais désespérer c'est ce que m'a appris mon professeur » </p>   
      <br/> */}
      <hr/>
      <Jumbotron className="Jumbotron">
        <h1 class="display-5">Le Projet De L'Alma</h1>
        <br/>
        <p>
          Notre groupe a pour but de refaire le site web de l'Alma, c'est-à-dire le site de la Radio Clin
          d'Oeil FM et le site du cinéma.
        </p>
        <br/>
        <p>
          <Link to="projet"><Button variant="primary">En savoir plus sur le projet</Button></Link>
        </p>
      </Jumbotron>
      <hr/>
      <br/>
      <h1><span role="img" aria-label="emoj"> 🚧 💡 ✏️ 🚀 🚧 </span></h1>
      <br/>

      <Alert variant="success" id="accordion">
        <Alert.Heading>Avertissement</Alert.Heading>
        <p>
          Ci-dessous répertorié mon évolution <Badge variant="dark">Personnelle</Badge> ainsi que l'évolution du <Badge variant="primary">Projet</Badge>.
        </p>
        <hr />
        <p className="mb-0">
          Ce repertoire est mis à jour regulièrement.
        </p>
      </Alert>
      <br/>
      <h1 class="display-4">L'Evolution Du Projet</h1>
      <hr/>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            9 mars <Badge variant="primary">Projet</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Lors de cette première scéance, on a parlé de la meilleure façon de créer <strong>un site web</strong> pour l’Alma
              <br/>Alexandre propose de faire un site web avec <span role="img" aria-label="emoj"> ⚛️ </span><kbd>React.js</kbd>
              <br/>Moi, pour créer un site web, je ne connaissais que <kbd>HTML5</kbd> et <kbd>CSS3</kbd>
              <br/>Un peu plus tard, on choisit de faire le site de l’Alma avec <kbd>Gatsby</kbd> qui permet de déployer des sites statiques et qui est basé sur du <span role="img" aria-label="emoj"> ⚛️ </span><kbd>React.js</kbd>
              <br/>Après avoir relu <i>le cahier des charges</i> on décide également de la structure du site, qui sera la suivante:
              <br/>
              <br/>
              <ul class="list-group">
                <li class="list-group-item">Une <strong>page d’accueil</strong> (index) qui permet de se diriger soit vers <strong>le site du Cinéma de l’Alma</strong> soit vers <strong>le site de la Radio Clin d’Oeil FM</strong></li>
                <li class="list-group-item"><span role="img" aria-label="emoj"> ✅ </span>Plusieurs pages pour <strong>le Cinéma de l'Alma</strong></li>
                <li class="list-group-item"><span role="img" aria-label="emoj"> ✅ </span>Plusieurs pages pour <strong>la Radio Clin d'Oeil FM</strong></li>
              </ul>
              <br/>
              <i>Nota Bene: </i> En plus de la <strong>page d’accueil</strong> (index) qui nous permet de naviguer entre ces deux sites, il est décidé de mettre <strong>une barre de navigation commune</strong> sur toutes les pages des deux sites (<strong>Cinéma</strong> et <strong>Radio</strong>) qui permet de basculer rapidement de l’une à l’autre.
              <br/>
              <br/>
              <ul class="list-group">
                <li class="list-group-item"><span role="img" aria-label="emoj"> 🚧 </span>On décide également de mettre en place <strong>une interface de gestion administrative</strong> qui permet à l’employé de modifier le contenu du site facilement et rapidement (images, textes, liens). Cette interface sera accessible avec un mot de passe.</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            16 mars <Badge variant="primary">Projet</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <span role="img" aria-label="emoj"> 🎨 </span>Deuxième scéance générale, on met en place <strong>le design</strong> du site grâce à <strong>des maquettes</strong> réalisées sur <i>Adobe XD</i>
              <br/> 
              <br/><span role="img" aria-label="emoj"> ✏️ </span>Création des différentes pages du <strong>Cinéma</strong><span role="img" aria-label="emoj"> 🎞️ </span> sur <code>codesandbox.io</code>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            16 mars <Badge variant="dark">Personnelle</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Chez moi<span role="img" aria-label="emoj"> 🌙 </span>. Je commence à me <a href="https://www.gatsbyjs.org/tutorial/" target="blank">documenter</a> sur le site de <kbd>Gatsby</kbd>. Prise en main de <strong>Visual Studio Code</strong><span role="img" aria-label="emoj"> 💻 </span>. Avant je codais avec <strong>Sublime Text</strong> mais
              je trouve que <strong>Visual Studio Code</strong> est plus adapté pour coder avec <span role="img" aria-label="emoj"> ⚛️ </span><kbd>React.js</kbd>
              <br/>
              <br/>Pour m'entraîner à utiliser <span role="img" aria-label="emoj"> ⚛️ </span><kbd>React.js</kbd> je crée plusieurs projets <kbd>Gatsby</kbd> pour concevoir ultérieurement mon carnet de bord <i>(que voici)</i>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            21 mars <Badge variant="primary">Projet</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <span role="img" aria-label="emoj"> ✏️ </span>Création de <strong>la page d'Accueil</strong> (index) et de <strong>la page de la Radio</strong>
              <br/>
              <br/><span role="img" aria-label="emoj"> 🛑 </span>On arrête de travailler avec <code>codesandbox.io</code> pour travailler localement et se partager le projet sur <code>GitHub</code>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            23 mars <Badge variant="success">Groupe</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              Confinement. <span role="img" aria-label="emoj"> ⚖️ </span>Vidéo-conférence avec M. Grava pour lui parler de l'avancement du projet
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            23 mars <Badge variant="primary">Projet</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              On perfectionne <span role="img" aria-label="emoj"> 📻 </span><strong>la page de la Radio</strong> en y ajoutant un lien pour pouvoir streamer <span role="img" aria-label="emoj"> ⏺️ </span><strong>la Radio Clin D'Oeil FM</strong>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="6">
            25 mars <Badge variant="dark">Personnelle</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <span role="img" aria-label="emoj"> 💡 </span>Je finis de lire la documentation <kbd>Gatsby</kbd>
              <br/> Je débute un nouveau projet <kbd>Gatsby</kbd> c'est ce carnet de bord
              <br/> Avec mes connaissances, je réalise une page web basique.
              <br/> <span role="img" aria-label="emoj"> 🎨 </span>J'essaye de la styliser avec du <kbd>CSS</kbd> customisé. 
              Néanmoins, je me rend compte qu'il y a une technologie de web design<span role="img" aria-label="emoj"> ⚙️ </span> qui m'échappe... c'est <kbd>Bootstrap</kbd>
              <br/>
              <br/> Je commence a lire la <a href="https://react-bootstrap.netlify.com/getting-started/introduction" target="blank">documentation</a> de <code>react-bootstrap</code> tout en ajoutant différents composants à ma page
              <br/> Le premier objet issu de <kbd>Bootstrap</kbd> que j'ajoute est la <strong>navBar</strong>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="7">
            2 avril <Badge variant="primary">Projet</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              <strong>Le site web de l'Alma est presque fini.</strong> On estime qu'il est à 75% d'être achevé.
              <br/>
              <br/><span role="img" aria-label="emoj"> 🚧 </span>Il manque surtout d'ajouter <strong>une plateforme administrative en back-end</strong> avec <kbd>Strapi</kbd> et <span role="img" aria-label="emoj"> 🚀 </span>régler quelques bugs UI de compatibilité avec les mobiles
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="8">
            5 avril <Badge variant="dark">Personnelle</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              J'ai fini mon carnet de bord. Il sera hébergé sur <code>surge.sh</code>
              <br/> C'est un site statique crée avec <kbd>Gatsby</kbd> basé sur du <span role="img" aria-label="emoj"> ⚛️ </span><kbd>React</kbd> et qui utilise différents composants <kbd>Bootstrap</kbd>
              <br/> 
              <br/> Sa création m'aura permit de comprendre et de maîtriser ces différentes technologies de développement web
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        {/* <Card>
          <Accordion.Toggle as={Card.Header} eventKey="9">
            16 mars <Badge variant="dark">Personnelle</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              Chez moi. <span role="img" aria-label="emoj"> 🛣️ </span>Prise en main de Visual Studio Code. Avant je codais avec Sublime Text mais
              je trouve que Visual Studio Code est plus adapté pour coder avec <kbd>React.js</kbd>
            </Card.Body>
          </Accordion.Collapse>
        </Card> */}
      </Accordion>
      <br/>
      <Spinner animation="border" />
    </Layout>
  </div> 
)

export default IndexPage
