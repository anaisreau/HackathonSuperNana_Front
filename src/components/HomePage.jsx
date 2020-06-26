import React from 'react'
import { Icon, Image, Button, Modal, Header} from 'semantic-ui-react'
import logo from '../logo.png'
import '../components/Homepage.css'
import {Link} from 'react-router-dom'
import traitment from '../traitement.png'
import map from '../map.png'
// import Orion_linkedin from '../icons/Orion_linkedin.png'


function HomePage() {


  return (
      <>
        <div className='bodyAll'>
          <img className ='logo' src={logo}/>    
    
          <div className='bodyPres'>
            <Modal className='modale' trigger={<Button className='aboutus'>About us</Button>} basic size='small'>
                <Header content='Who are we ?' />
                <Modal.Content >
                  <p className='textPres'>
                    We are four women who have converted professionally 
                    and decided to take training at the Wild Code School in order 
                    to become web developers. 
                    This is a project that we carried out during the Hackathon in partnership with Doctolib.
                  </p>
                  <section className="contactFiles">
                    <div className="contactData">
                      <p>Anais</p>
                      <a
                        href="https://github.com/anaisreau"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon inverted
                          id="github"
                          name='github'
                          alt="GitHub"
                          size = 'big'
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/anaisreau/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon inverted
                          className="linkedin"
                          name="linkedin"
                          alt="Linked In"
                          size = 'big'
                        />
                      </a>
                      <p className='nameDiv'>Helene</p>
                      <a
                        href="https://github.com/HeleneM35/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon inverted
                          id="github"
                          name='github'
                          alt="GitHub"
                          size = 'big'
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/helenemorel35/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon inverted
                          className="linkedin"
                          name="linkedin"
                          alt="Linked In"
                          size = 'big'
                        />
                      </a>
                      
                    </div>
                    <div className="contactData">
                      <p>Johanna</p>
                      <a
                        href="https://github.com/Johanna-cs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon inverted
                          id="github"
                          name='github'
                          alt="GitHub"
                          size = 'big'
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/johanna-cas/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon inverted
                          className="linkedin"
                          name="linkedin"
                          alt="Linked In"
                          size = 'big'
                        />
                      </a>
                      <p className='nameDiv'>Sabrina</p>
                      <a
                        href="https://github.com/sabgirl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon inverted
                          id="github"
                          name='github'
                          alt="GitHub"
                          size = 'big'
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/sabrina-bartoli-b421b975/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon inverted
                          className="linkedin"
                          name="linkedin"
                          alt="Linked In"
                          size = 'big'
                        />
                      </a>
                    </div>
                  </section>
                </Modal.Content>
              </Modal>

              <br/>
              <section className='textCont'>
                <p>
                  This website is intended to offer you health travel destinations according to two categories:</p>
                    
                      <p>Research by treatment or need</p>
                      <p>Research by destination</p>
                  
                  <p>Click on the images below and access your preferred search mode
                </p>
              </section>

            <div className='ResearchChoice'>
              <Link to ='/searchtreatment'>
                <Image id='landingIcon1' src ={traitment} alt='health' size='small' />
                <p className='searchText'>Search by treatment</p>
              </Link>

              <Link to ='/searchdestination'>
                <Image id='landingIcon2' src ={map} alt='health' size='small'/>
                <p className='searchText'>Search by destination</p>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
}

export default HomePage