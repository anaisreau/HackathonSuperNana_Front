import React from 'react'
import { Image, Button, Modal, Header} from 'semantic-ui-react'
import logo from '../logo.png'
import '../components/Homepage.css'
import {Link} from 'react-router-dom'
import traitment from '../traitement.png'
import map from '../map.png'
// import Orion_linkedin from '../icons/Orion_linkedin.png'


function HomePage() {


  return (
      <>
        <img className ='logo' src={logo}/>    
  
        <div className='body'>
          <Modal className='modale' trigger={<Button className='aboutus'>About us</Button>} basic size='small'>
              <Header content='Who are we ?' />
              <Modal.Content >
                <p>
                  We are four women who have converted professionally 
                  and decided to take training at the Wild Code School in order 
                  to become web developers. 
                  This is a project that we carried out during the Hackathon in partnership with Doctolib
                </p>
                <section className="contactFiles">
                  <div className="contactData">
                    <p>Helene</p>
                    <a
                      href="https://github.com/HeleneM35"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <img
                        id="github"
                        src="https://www.sferalabs.cc/wp-content/uploads/github-logo-white.png"
                        alt="GitHub"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/helenemorel35/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        id="linkedin"
                        src="https://img.icons8.com/ios/100/000000/linkedin.png"
                        alt="Linked In"
                      />
                    </a>
                  </div>
                </section>
              </Modal.Content>
            </Modal>

            <br/>
            <div className='textCont'>
              <p>
                This website is intended to offer you health travel destinations according to two categories:</p>
                  
                    <p>Research by treatment or need</p>
                    <p>Research by destination</p>
                 
                <p>Click on the images below and access your preferred search mode
              </p>
            </div>

          <div className='ResearchChoice'>
            <Link to ='/searchtreatment'>
              <Image className='landingIcon' src ={traitment} alt='health' size='small' />
              <p className='searchText'>Search by treatment</p>
            </Link>

            <Link to ='/searchdestination'>
              <Image className='landingIcon' src ={map} alt='health' size='small'/>
              <p className='searchText'>Search by destination</p>
            </Link>
          </div>
        </div>
      </>
    )
}

export default HomePage