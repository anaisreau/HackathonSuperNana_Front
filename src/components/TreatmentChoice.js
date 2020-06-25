import React, {useState, useEffect} from 'react';
import { Card, Container, Image } from 'semantic-ui-react'
import './TreatmentChoice.css';
import Orion_tooth from '../icons/Orion_tooth.png'
import Orion_fertility from '../icons/Orion_fertility.png'
import Orion_user from '../icons/Orion_user.png'
import Orion_weighing from '../icons/Orion_weighing.png'
import {Link, Redirect, useHistory} from 'react-router-dom'

const TreatmentChoice = () => {
  const [treatment, setTreatment]=useState('')
  let history =useHistory()

const handleClick=(e)=>{
  
  setTreatment(e.target.value)
  console.log(treatment)
  
}

useEffect(()=> {

}, []);



  return (
    <>
      <Container className='cardsContainer'>

        <Container className='cards' >
          <Card className='card'>
            <Image src={Orion_tooth} wrapped ui={false}/>
            <Card.Content className='cardContent'>
            <Card.Header  className='cardHeader'>DENTISTRY</Card.Header>
            <Card.Description className='cardDesc'>
                Dental prosthesis
                <br/>
                Implants
                <Link to ='/searchtreatment'><button value='surrogacy' onClick={handleClick}>show results</button>
   See More</Link>
            </Card.Description>
            </Card.Content>
          </Card>
          

          <Card value='surrogacy'className='card'>
            <Image src={Orion_fertility} wrapped ui={false}/>
            <Card.Content className='cardContent'>
            <Card.Header name = 'surrogacy'className='cardHeader'>SURROGACY</Card.Header>
            <Card.Description className='cardDesc'>
                In Vitro Fertilization (IVF)
                <br/>
                Male Infertility
                <Link to ='/searchtreatment'><button value='surrogacy' onClick={handleClick}>show results</button></Link>
            </Card.Description>
            </Card.Content>
          </Card>
        </Container>

        <Container className='cards'>
        <Card className='card'>
            <Image src={Orion_user} wrapped ui={false}/>
            <Card.Content className='cardContent'>
            <Card.Header name = 'cosmetic surgery' className='cardHeader'>COSMETIC SURGERY</Card.Header>
            <Card.Description className='cardDesc'>
                Breast Augmentation
                <br/>
                Face and eyes
                <Link to ='/searchtreatment'><button value='Cosmetic surgery' onClick={handleClick}>show results</button></Link>
            </Card.Description>
            </Card.Content>
          </Card>

          <Card className='card'>
                <Image src={Orion_weighing} wrapped ui={false}/>
                <Card.Content className='cardContent'>
                <Card.Header name = 'weight loss surgery' className='cardHeader'>WEIGHT LOSS SURGERY</Card.Header>
                <Card.Description className='cardDesc'>
                    Adjustable Gastric Banding
                    <br/>
                    Gastric Sleeve
                    <Link to ='/searchtreatment'><button value='weight loss surgery' onClick={handleClick}>show results</button></Link>
                </Card.Description>
                </Card.Content>
            </Card>
        </Container>

      </Container>
    </>
  );
}

export default TreatmentChoice;