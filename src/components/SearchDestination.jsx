import React, { useState, useEffect } from 'react'
import {Dropdown, Button} from 'semantic-ui-react'
import './SearchDestination.css'

function SearchDestination() {
const {country, setCountry}= useState()
const {city , setCity}= useState()
const {countrySelected, setCountrySelected}= useState()

// function getdata(){
//     app.get('')
//     .then(res => setCountry(res.country))
// }



    return (
 <>
<h1>Search by Destination</h1>

<Dropdown
    placeholder='Select Country'
    fluid
    selection
    options={country}
    onChange={useEffect}
    value={countrySelected}
  />
<br/>

<Dropdown
    placeholder='Select City'
    fluid
    selection
    options={city}
  />
 <br/>
<Button type='submit' className='submit' >Search</Button>

 </>

    )
}

export default SearchDestination