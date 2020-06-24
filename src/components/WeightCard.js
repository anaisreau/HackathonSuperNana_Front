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
                <Card.Header className='cardHeader'>WEIGHT LOSS SURGERY</Card.Header>
                <Card.Description className='cardDesc'>
                    Adjustable Gastric Banding
                    <br/>
                    Gastric Sleeve
                </Card.Description>
                </Card.Content>
            </Card>
        </>
    )
}

export default WeightCard