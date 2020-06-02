import React from "react"

import "./index.css"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Accordion, Card, Jumbotron, Alert, Badge } from 'react-bootstrap';
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

      <Alert variant="warning" id="accordion">
        <Alert.Heading>Avertissement</Alert.Heading>
        <p>
          Ci-dessous répertorié mon évolution <Badge variant="dark">Personnelle</Badge> ainsi que l'évolution du <Badge variant="primary">Projet</Badge>
        </p>
        <hr />
        <p className="mb-0">
          Ce répertoire n'est plus mit à jour. Le projet est fini.
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
                <li class="list-group-item"><span role="img" aria-label="emoj"> ✔ </span>Plusieurs pages pour <strong>le Cinéma de l'Alma</strong></li>
                <li class="list-group-item"><span role="img" aria-label="emoj"> ✔ </span>Plusieurs pages pour <strong>la Radio Clin d'Oeil FM</strong></li>
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
              <span role="img" aria-label="emoj"> 🛑 </span>On arrête de travailler avec <code>codesandbox.io</code> pour travailler localement et se partager le projet sur <code>GitHub</code>
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
            <span role="img" aria-label="emoj"> ✏️ </span>Création de <strong>la page d'Accueil</strong> (index) et de <strong>la page de la Radio</strong>
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
            30 mars <Badge variant="primary">Projet</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              On perfectionne <span role="img" aria-label="emoj"> 📻 </span><strong>la page de la Radio</strong> en y ajoutant un lien pour pouvoir streamer <span role="img" aria-label="emoj"> ⏺️ </span><strong>la Radio Clin D'Oeil FM</strong>
              <br/>
              <br/>
              <strong>Le site web de l'Alma est presque fini.</strong> On estime qu'il est à 75% d'être achevé
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
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="9">
            27 avril <Badge variant="primary">Projet</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              <strong><span role="img" aria-label="emoj"> 📱 </span>Compatibilité mobile:</strong>
              <br/>
              <br/>
              Je met en place le système <code>Grid</code> de <kbd>Bootstrap</kbd> pour avoir des élements <code>Responsive</code> (qui s'adaptent à la taille de l'écran de l'utilisateur) notamment sur le site de la Radio
              <br/>
              <span role="img" aria-label="emoj"> 🐞 </span><strong>Bug</strong> avec la <code>navBar</code> <kbd>Bootstrap</kbd> on cherche des solutions. Finalement, Alexandre trouve la solution : une <code>navBar</code> s'ouvrant vers le haut
              <br/>
              <br/>
              <strong><span role="img" aria-label="emoj"> 🔑 </span>Interface administrateur:</strong>
              <br/>
              <br/>
              Ecriture de la documentation | Ajout de nouvelles pages
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="10">
            1er mai <Badge variant="dark">Personnelle</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="10">
            <Card.Body>
              Avec mes nouvelles connaissances en <kbd>Bootstrap</kbd> je commence un projet personnel où je crée un site dynamique<span role="img" aria-label="emoj"> 🚧 </span>
              <br/>Je suis confronté à un problème: le site utilise deux versions de <kbd>Bootstrap</kbd> (une version dépassée <code>v3.0.3</code> et une plus récente <code>v4.3.1</code>) 
              <br/>Je cherche donc dans les fichiers <kbd>.CSS</kbd> et <kbd>.JS</kbd> <kbd>Bootstrap</kbd> ce qui m'interesse pour créer une <code>stylesheet</code> hybridifiée
              <br/>
              <br/>Etant donné que le site de l'Alma possède les mêmes feuilles de styles <kbd>Bootstrap</kbd> je suis à present capable de gérer ces <span role="img" aria-label="emoj"> 🐞 </span><strong>bugs</strong> d'incompatibilité  
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="11">
            2 mai <Badge variant="primary">Projet</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="11">
            <Card.Body>
              Je fais la page <strong>Partenaires</strong> de la Radio<span role="img" aria-label="emoj"> 🔊 </span> mais également la page <strong>Equipe</strong> avant de m'attaquer à la page <strong>Gallerie</strong>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="12">
            4 mai <Badge variant="success">Groupe</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="12">
            <Card.Body>
              <span role="img" aria-label="emoj"> ⚖️ </span>Vidéo-conférence avec M. Grava pour lui parler de l'avancement du projet
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="13">
            9 mai <Badge variant="primary">Projet</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="13">
            <Card.Body>
              Je crée les pages <strong>Confidentialité</strong> et <strong>TOS</strong><span role="img" aria-label="emoj"> 📜 </span> 
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="14">
            16 mai <Badge variant="primary">Projet</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="14">
            <Card.Body>
              Je crée la page <strong>Lieu</strong><span role="img" aria-label="emoj"> 🗺️ </span> et j'y ajoute un <code>embed</code> de <strong>OpenStreetMap</strong>
              , que j'ajoute également sur la page <strong>Accueil</strong> (de la radio)
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="15">
            17 mai <Badge variant="dark">Personnelle</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="15">
            <Card.Body>
              <span role="img" aria-label="emoj"> ✔ </span> Je met a votre disposition <strong>le reposit</strong> <kbd>GitHub</kbd> sur le <a href="#footer">Footer</a> (juste en dessous)
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="16">
            20 mai <Badge variant="primary">Projet</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="16">
            <Card.Body>
              Je résous une partie des liens erronés <span role="img" aria-label="emoj"> 🔗 </span> dû au <code>crawling</code>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="17">
            29 mai <Badge variant="success">Groupe</Badge>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="17">
            <Card.Body>
            C'est fini. <span role="img" aria-label="emoj"> 📅 </span> On rend le projet final <span role="img" aria-label="emoj"> 🔚 </span>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br/>
      <h1 class="lead" style={{fontSize:`3rem`}}><span role="img" aria-label="emoj"> 🚧 </span>Projet Terminé !<span role="img" aria-label="emoj"> 🚧 </span></h1>
    </Layout>
  </div> 
)

export default IndexPage
