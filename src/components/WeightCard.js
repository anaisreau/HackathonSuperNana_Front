import React from 'react'
import Orion_weighing from '../icons/Orion_weighing.png'
import { Card, Image } from 'semantic-ui-react'
import './Cards.css'

const WeightCard = () => {


    return (
        <>
            <Card className='card'>
                <Image src={Orion_weighing} wrapped ui={false}/>
                <Card.Content className='cardContent'>
                <Card.Header className='cardHeader'>Perte de poids</Card.Header>
                <Card.Description className='cardDesc'>
                    Anneau gastrique réglable
                    <br/>
                    Manchon gastrique
                </Card.Description>
                </Card.Content>
            </Card>
        </>
    )
}

export default WeightCard