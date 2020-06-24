import React from 'react';
import { Card, Container, Image } from 'semantic-ui-react'
import './TreatmentChoice.css';
import Orion_tooth from '../icons/Orion_tooth.png'
import Orion_fertility from '../icons/Orion_fertility.png'
import Orion_user from '../icons/Orion_user.png'
import Orion_weighing from '../icons/Orion_weighing.png'

const TreatmentChoice = () => {
  return (
    <>
      <Container className='cardsContainer'>

        <Container className='cards'>
          <Card className='card'>
            <Image src={Orion_tooth} wrapped ui={false}/>
            <Card.Content className='cardContent'>
            <Card.Header className='cardHeader'>DENTISTRY</Card.Header>
            <Card.Description className='cardDesc'>
                Dental prosthesis
                <br/>
                Implants
            </Card.Description>
            </Card.Content>
          </Card>

          <Card className='card'>
            <Image src={Orion_fertility} wrapped ui={false}/>
            <Card.Content className='cardContent'>
            <Card.Header className='cardHeader'>SURROGACY</Card.Header>
            <Card.Description className='cardDesc'>
                In Vitro Fertilization (IVF)
                <br/>
                Male Infertility
            </Card.Description>
            </Card.Content>
          </Card>
        </Container>

        <Container className='cards'>
          <Card className='card'>
            <Image src={Orion_user} wrapped ui={false}/>
            <Card.Content className='cardContent'>
            <Card.Header className='cardHeader'>COSMETIC SURGERY</Card.Header>
            <Card.Description className='cardDesc'>
                Breast Augmentation
                <br/>
                Face and eyes
            </Card.Description>
            </Card.Content>
          </Card>

          <Card className='card'>
                <Image src={Orion_weighing} wrapped ui={false}/>
                <Card.Content className='cardContent'>
                <Card.Header className='cardHeader'>WEIGHT LOSS SURGERY</Card.Header>
                <Card.Description className='cardDesc'>
                    Adjustable Gastric Banding
                    <br/>
                    Gastric Sleeve
                </Card.Description>
                </Card.Content>
            </Card>
        </Container>

      </Container>
    </>
  );
}

export default TreatmentChoice;