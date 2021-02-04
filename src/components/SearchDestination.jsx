import React, { useState, useEffect } from 'react'
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import './SearchDestination.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import budapest from './imagesBackgound/budapest.jpeg'
import cyprus from './imagesBackgound/cyprus.jpeg'
import frankfurt from './imagesBackgound/frankfurt.jpeg'
import istanbul from './imagesBackgound/istanbul.jpeg'
import krakow from './imagesBackgound/krakow.jpeg'



function SearchDestination() {

  const [country, setCountry] = useState('')




  function getdata() {
    Axios.get('http://localhost:3001/clinic/country')
      .then(res => setCountry(res.data))
  }



  useEffect(() => {
    getdata()
  }, [])
  console.log(country)

  return (
    <div className="searchDest_page">
      <h1 className='searchDest'>Search by destination</h1>

<Card.Group>
      <Card>
        <Image src={istanbul} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Turkey</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Link
            to={{
              pathname: '/resultdestination',
              setCountry: 'Turquie'
            }}><i>
              <Icon name='plane' />
       See more
      </i></Link>
        </Card.Content>
      </Card>

      <Card>
        <Image src={frankfurt} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Germany</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Link
            to={{
              pathname: '/resultdestination',
              setCountry: 'Allemagne'
            }}><i>
              <Icon name='plane' />
       See more
      </i></Link>
        </Card.Content>
      </Card>

      <Card>
        <Image src={cyprus} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Cyprus</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Link
            to={{
              pathname: '/resultdestination',
              setCountry: 'Chypre'
            }}><i>
              <Icon name='plane' />
       See more
      </i></Link>
        </Card.Content>
      </Card>

      <Card>
        <Image src={budapest} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Hungary</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Link
            to={{
              pathname: '/resultdestination',
              setCountry: 'Hongrie'
            }}><i>
              <Icon name='plane' />
       See more
      </i></Link>
        </Card.Content>
      </Card>

      <Card>
        <Image src={budapest} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Thialand</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Link
            to={{
              pathname: '/resultdestination',
              setCountry: 'Thailande'
            }}><i>
              <Icon name='plane' />
       See more
      </i></Link>
        </Card.Content>
      </Card>

      <Card>
        <Image src={krakow} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Poland</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Link
            to={{
              pathname: '/resultdestination',
              setCountry: 'Pologne'
            }}><i>
              <Icon name='plane' />
       See more
      </i></Link>
        </Card.Content>
      </Card>
      
     
      </Card.Group>

<Link to ='/'><Button>Retour à la page d'accueil</Button></Link> 


    </div>

  )
}

export default SearchDestination