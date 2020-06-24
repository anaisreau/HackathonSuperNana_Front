import React from 'react'
import Orion_user from '../icons/Orion_user.png'
import { Card, Image } from 'semantic-ui-react'
import './Cards.css'

const SurgeryCard = () => {


    return (
        <>
            <Card className='card'>
                <Image src={Orion_user} wrapped ui={false}/>
                <Card.Content className='cardContent'>
                <Card.Header className='cardHeader'>Chirurgie esthétique</Card.Header>
                <Card.Description>
                    Augmentation mammaire
                    <br/>
                    Visage et regard
                </Card.Description>
                </Card.Content>
            </Card>
        </>
    )
}

export default SurgeryCard