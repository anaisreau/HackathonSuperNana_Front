import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Card, Container, Icon, Image, Button } from 'semantic-ui-react'
import './ResultTraitment.css'
import { Link } from 'react-router-dom'
import Calendar from './Calendar/Calendar'

function ResultTreatment(props) {

    const treatmentChoice = props.location.setTreatment
    const [resultTreatment, setResultTreatment] = useState([])

    const getData = () => {
        Axios.get('http://localhost:3001/clinic')
            .then(res => setResultTreatment((res.data)))
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
        <div className='bodytreat'>
            <h2 className='resTttTitle'>Results of your selection for {treatmentChoice}</h2>
            {resultTreatment.filter( e=> e.Speciality === treatmentChoice)
            .map(e => {
                return (
                    <Container className='center'>
                        <Card fluid className='result'>
                            <Card.Content className='resTttContent' >
                                <Card.Header className='resTttHeader'>{e.ClinicName}</Card.Header>
                                <Card.Meta className='tttAdress'>
                                    <span>{e.adress}</span>
                                    <div>{e.city}</div>
                                </Card.Meta>
                                <Card.Description className='tttDesc'>
                                {e.Speciality}  <br/>
                                {e.care_type}
                                </Card.Description>
                            </Card.Content>
                            <Calendar className='calendar' />
                        </Card>
                    </Container>
                )
            })}
           <Link to='/searchtreatment'> <Button className='button'>Return to treatment Choice</Button></Link>
        </div> </>

    )
}

export default ResultTreatment