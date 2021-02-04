import React from 'react'
import { Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const ResearchChoice = () => {

    return (
        <div className='research'>

            <Header as='h2'>
                <Link to='/searchtreatment'>
                    <Icon.Group size='large'>
                        <Icon name='syringe' />
                    </Icon.Group>
    Search by treatment </Link>
            </Header>
            <Header as='h2'>
                <Link to='/searchdestination'>
                    <Icon.Group size='large'>
                        <Icon name='plane' />
                    </Icon.Group>
    Search by destination</Link>
            </Header>
        </div>
    )
}

export default ResearchChoice