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
                <Card.Header className='cardHeader'>COSMETIC SURGERY</Card.Header>
                <Card.Description className='cardDesc'>
                    Breast Augmentation
                    <br/>
                    Face and eyes
                </Card.Description>
                </Card.Content>
            </Card>
        </>
    )
}

export default SurgeryCard