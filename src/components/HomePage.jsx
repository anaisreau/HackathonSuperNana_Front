import React from 'react'
import { Icon, Button, Modal, Header } from 'semantic-ui-react'
import '../components/Homepage.css'

import Slideshow from './slideshow'
import ResearchChoice from './ResearchChoice'
// import Orion_linkedin from '../icons/Orion_linkedin.png'


function HomePage() {


  return (
    <>

      <Slideshow />


      <section className='textCont'>
        <p>
          This website is intended to offer you health travel destinations according to two categories:</p>

        <p>Research by treatment or need</p>
        <p>Research by destination</p>

        <p>Click on the images below and access your preferred search mode
              </p>
      </section>


      <Modal className='modale' trigger={<Button >About us</Button>} basic size='small'>
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
                  size='big'
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
                  size='big'
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
                  size='big'
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
                  size='big'
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
                  size='big'
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
                  size='big'
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
                  size='big'
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
                  size='big'
                />
              </a>
            </div>
          </section>
        </Modal.Content>
      </Modal>

      <br />


      <ResearchChoice />

    </>
  )
}

export default HomePage