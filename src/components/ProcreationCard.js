import React from 'react'
import Orion_fertility from '../icons/Orion_fertility.png'
import { Card, Image } from 'semantic-ui-react'
import './Cards.css'

const ProcreationCard = () => {


    return (
        <>
            <Card className='card'>
                <Image src={Orion_fertility} wrapped ui={false}/>
                <Card.Content className='cardContent'>
                <Card.Header className='cardHeader'>Procréation</Card.Header>
                <Card.Description>
                    Fécondation in vitro (FIV)
                    <br/>
                    Infertilité masculine
                </Card.Description>
                </Card.Content>
            </Card>
        </>
    )
}

export default ProcreationCard