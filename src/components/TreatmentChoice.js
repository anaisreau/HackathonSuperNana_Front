import React, { useState } from 'react';
import { Button, Card, Container, Image } from 'semantic-ui-react'
import './TreatmentChoice.css';
import Orion_tooth from '../icons/Orion_tooth.png'
import Orion_fertility from '../icons/Orion_fertility.png'
import Orion_user from '../icons/Orion_user.png'
import Orion_weighing from '../icons/Orion_weighing.png'
import { Link } from 'react-router-dom'

const TreatmentChoice = () => {
  const [treatment, setTreatment]=useState('')

  const handleClick = (e) => {
    setTreatment(e.target.value)
  }

  return (
    <>
      <Container>

        <Container  className='cards' >
          <Card fluid className='card'>
            <Image src={Orion_tooth} wrapped ui={false} id='toothImg'/>
            <Card.Content className='cardContent'>
              <Card.Header  className='cardHeader'>DENTISTRY</Card.Header>
                <Card.Description className='cardDesc'>
                  Dental prosthesis
                  <br/>
                  Implants
                <Link className='cardsLink'
                  to={{
                    pathname: '/resulttreatment',
                    setTreatment: 'Dentist'}}>
                  <Button className='buttonTreatment'>View results</Button>
                </Link>
              </Card.Description>
            </Card.Content>
          </Card>
          

          <Card fluid value='surrogacy'className='card'>
            <Image src={Orion_fertility} wrapped ui={false} id='procreationImg'/>
            <Card.Content className='cardContent'>
            <Card.Header name = 'surrogacy'className='cardHeader'>SURROGACY</Card.Header>
            <Card.Description className='cardDesc'>
                In Vitro Fertilization (IVF)
                <br/>
                Male Infertility
                <Link
                  to={{
                    pathname: '/resulttreatment',
                    setTreatment: 'Procreation'
                  }}>
                  <Button className='buttonTreatment'>View results</Button>
                </Link>
              </Card.Description>
            </Card.Content>
          </Card>
        </Container>

        <Container className='cards'>
          <Card fluid className='card'>
            <Image src={Orion_user} wrapped ui={false} id='cosmeticImg'/>
            <Card.Content className='cardContent'>
            <Card.Header name = 'cosmetic surgery' className='cardHeader'>COSMETIC SURGERY</Card.Header>
            <Card.Description className='cardDesc'>
                Breast Augmentation
                <br/>
                Face
                <br/>
                Implants capillaires
                <Link
                  to={{
                    pathname: '/resulttreatment',
                    setTreatment: 'Plastic Surgery'
                  }}>
                  <Button className='buttonTreatment'>View results</Button>
                </Link>
              </Card.Description>
            </Card.Content>
          </Card>

          <Card fluid className='card'>
                <Image src={Orion_weighing} wrapped ui={false} id='weighImg'/>
                <Card.Content className='cardContent'>
                <Card.Header name = 'weight loss surgery' className='cardHeader'>WEIGHT LOSS SURGERY</Card.Header>
                <Card.Description className='cardDesc'>
                    Adjustable Gastric Banding
                    <br/>
                    Gastric Sleeve
                    <Link
                      to={{
                        pathname: '/resulttreatment',
                        setTreatment: 'Weight Loss'
                      }}>
                      <Button className='buttonTreatment'>View results</Button>
                    </Link>
                </Card.Description>
              </Card.Content>
            </Card>
        </Container>

      </Container>
    </>
  );
}

export default TreatmentChoice;