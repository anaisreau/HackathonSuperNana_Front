import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import './ResultTraitment.css'
import {Link } from 'react-router-dom'

function ResultTreatment(props) {

    const treatmentChoice = props.location.setTreatment
    const [resultTreatment, setResultTreatment] = useState([])

    const getData = () => {
        Axios.get('http://localhost:3001//clinic')
            .then(response => setResultTreatment((response.data.result)))
    }

    useEffect(() => {
        getData()
    }, [resultTreatment])

   
    return (
        <>
            <h2>Resuts of your selection for {treatmentChoice}</h2>
            {resultTreatment.map(e => {
                return (
                    <Card>
                        <Image src={e.name} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{e.adress}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{e.name}</span>
                            </Card.Meta>
                            <Card.Description>
                                {e.name}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                        </Card.Content>
                    </Card>
                )
            })}
           <Link to='/searchtreatment'> <Button className='button'>Return to treatment Choice</Button></Link>
        </>

    )
}

export default ResultTreatment