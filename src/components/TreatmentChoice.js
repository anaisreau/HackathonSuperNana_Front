import React  from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import './TreatmentChoice.css';
import Orion_tooth from '../icons/Orion_tooth.png'
import Orion_fertility from '../icons/Orion_fertility.png'
import Orion_user from '../icons/Orion_user.png'
import Orion_weighing from '../icons/Orion_weighing.png'
import { Link } from 'react-router-dom'

const TreatmentChoice = () => {
 

  return (
    <>
  <h1>Research by Treatment</h1>
<Card.Group>
       
          <Card>
            <Image src={Orion_tooth} wrapped ui={false} id='toothImg'/>
            <Card.Content >
              <Card.Header  >DENTISTRY</Card.Header>
                <Card.Description >
                  Dental prosthesis
                 
                  Implants </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                <Link
                  to={{
                    pathname: '/resulttreatment',
                    setTreatment: 'Dentist'}}>
                  <Button className='buttonTreatment'>View results</Button>
                </Link>
              
            </Card.Content>
          </Card>
          

          <Card >
            <Image src={Orion_fertility} wrapped ui={false} id='procreationImg'/>
            <Card.Content className='cardContent'>
            <Card.Header name = 'surrogacy'className='cardHeader'>SURROGACY</Card.Header>
            <Card.Description className='cardDesc'>
                In Vitro Fertilization (IVF)
                <br/>
                Male Infertility              </Card.Description>

                </Card.Content>
                      <Card.Content extra>
                <Link
                  to={{
                    pathname: '/resulttreatment',
                    setTreatment: 'Procreation'
                  }}>
                  <Button className='buttonTreatment'>View results</Button>
                </Link>
            </Card.Content>
          </Card>
      

        
          <Card >
            <Image src={Orion_user} wrapped ui={false} id='cosmeticImg'/>
            <Card.Content className='cardContent'>
            <Card.Header name = 'cosmetic surgery' className='cardHeader'>COSMETIC SURGERY</Card.Header>
            <Card.Description className='cardDesc'>
                Breast Augmentation
                <br/>
                Face
                <br/>Implants capillaires</Card.Description>
                </Card.Content>
                <Card.Content extra>
                
                <Link
                  to={{
                    pathname: '/resulttreatment',
                    setTreatment: 'Plastic Surgery'
                  }}>
                  <Button className='buttonTreatment'>View results</Button>
                </Link>
            </Card.Content>
          </Card>

          <Card >
                <Image src={Orion_weighing} wrapped ui={false} id='weighImg'/>
                <Card.Content className='cardContent'>
                <Card.Header name = 'weight loss surgery' className='cardHeader'>WEIGHT LOSS SURGERY</Card.Header>
                <Card.Description className='cardDesc'>
                    Adjustable Gastric Banding
                    <br/>
                    Gastric Sleeve
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <Link
                      to={{
                        pathname: '/resulttreatment',
                        setTreatment: 'Weight Loss'
                      }}>
                      <Button className='buttonTreatment'>View results</Button>
                    </Link>
              </Card.Content>
            </Card>
      </Card.Group>
    </>
  );
}

export default TreatmentChoice;