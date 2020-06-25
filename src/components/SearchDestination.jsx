import React, { useState, useEffect } from 'react'
import {Dropdown, Button, Card, Image, Icon} from 'semantic-ui-react'
import './SearchDestination.css'
import { getDefaultNormalizer } from '@testing-library/react'
import Axios from 'axios'

function SearchDestination() {
    
const [country, setCountry]= useState('')
const [countrySelected, setCountrySelected]= useState('')
const [resultDestination, setResultDestination] = useState('')


function getdata(){
    Axios.get('http://localhost:3001/clinic/country')
    .then(res => setCountry(res.data))

}

useEffect(()=> {
    getdata()
}, [])
console.log(country)
    return (
        <>
            <h1>Search by Destination</h1>
            {/* <form onSubmit={resultDestination.map(e => {
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
                )})} */}
                {country.map(c => (
                    <Dropdown
                        placeholder='Select Country'
                        fluid
                        selection
                        option={country}
                        onChange={e => setCountrySelected(e.currentTarget.value)}
                        value={country}
                    />)
                    )} 
                    <br/>

                    <Button type='submit' className='submit' >Search</Button>
            

        </>

    )
}

export default SearchDestination