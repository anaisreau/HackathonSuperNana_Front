import React, { useState, useEffect } from 'react'
import { Card, Icon, Image, Button, Container } from 'semantic-ui-react'
import './ResultDestination.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Calendar from './Calendar/Calendar'

function ResultDestination(props) {
    const destinationChoice = props.location.setCountry
    const [resultDestination, setResultDestination] = useState([])

    const getData = () => {
        Axios.get('http://localhost:3001/clinic/city')
            .then(res => setResultDestination((res.data)))
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <h2 className="destResTitle">Results of your selection for {destinationChoice}</h2>
            {resultDestination.filter(e => e.country === destinationChoice)
                .map(e => {
                    return (
                        <Container className='resultCont'>
                            <Card fluid id='resultCity'>
                                <Card.Content fluid >
                                    <Card.Header id='resDestHeader'>{e.name}</Card.Header>
                                    <Card.Meta className='destAddress'>
                                        <span className='date'>{e.adress}</span>
                                        <div className='date'>{e.city}</div>
                                    </Card.Meta>
                                    <Card.Description className='destDesc'>
                                        {e.Speciality}  <br />
                                        {e.care_type}
                                    </Card.Description>
                                </Card.Content>

                                
                                <Calendar width='25%'/>
                            </Card>
                        </Container>
                    )
                })}
            <Link to='/searchdestination'><Button className='buttonReturn'>Return to destination choice</Button></Link>
        </>

    )
}

export default ResultDestination