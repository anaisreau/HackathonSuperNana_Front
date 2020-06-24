import React from 'react'
import Orion_tooth from '../icons/Orion_tooth.png'
import { Card, Image } from 'semantic-ui-react'
import './Cards.css'

const DentistCard = () => {


    return (
        <>
            <Card className='card'>
                <Image src={Orion_tooth} wrapped ui={false}/>
                <Card.Content className='cardContent'>
                <Card.Header className='cardHeader'>Dentaire</Card.Header>
                <Card.Description className='cardDesc'>
                    Prothèses
                    <br/>
                    Implants
                </Card.Description>
                </Card.Content>
            </Card>
        </>
    )
}

export default DentistCard