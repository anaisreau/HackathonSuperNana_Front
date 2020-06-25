import React, { useState } from 'react'
import { Card, Icon, Image,Button } from 'semantic-ui-react'
import './ResultDestination.css'
import {Link} from 'react-router-dom'

function ResultDestination(props) {
    const destinationChoice = props.location.setResultDestination
    const [resultDestination, setResultDestination] = useState([])

    return (
        <>
        <h2>Resuts of your selection for {destinationChoice}</h2>
            {resultDestination.map(e => {
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
            <Link to='/searchdestination'><Button className='button'>Return to destination choice</Button></Link>
        </>

    )
}

export default ResultDestination