import React from 'react'
import Orion_brain from '../icons/Orion_brain.png'
import { Card, Image } from 'semantic-ui-react'
import './Cards.css'

const Neurology = () => {


    return (
        <>
            <Card className='card'>
                <Image src={Orion_brain} wrapped ui={false}/>
                <Card.Content>
                <Card.Header className='cardHeader'>Neurologie</Card.Header>
                <Card.Description>
                    Chirurgie de l'épilepsie
                    <br/>
                    Traitement de la maladie de Parkinson
                </Card.Description>
                </Card.Content>
            </Card>
        </>
    )
}

export default Neurology