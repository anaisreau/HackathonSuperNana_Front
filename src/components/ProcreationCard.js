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
                <Card.Header className='cardHeader'>SURROGACY</Card.Header>
                <Card.Description className='cardDesc'>
                    In Vitro Fertilization (IVF)
                    <br/>
                    Male Infertility
                </Card.Description>
                </Card.Content>
            </Card>
        </>
    )
}

export default ProcreationCard