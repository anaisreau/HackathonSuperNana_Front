import React, { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import './SearchDestination.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import bangkok from './imagesBackgound/bangkok.jpeg'
import budapest from './imagesBackgound/budapest.jpeg'
import cyprus from './imagesBackgound/cyprus.jpeg'
import frankfurt from './imagesBackgound/frankfurt.jpeg'
import istanbul from './imagesBackgound/istanbul.jpeg'
import krakow from './imagesBackgound/krakow.jpeg'
// import { CarouselProvider, Image, Slide, Slider, Dot } from "pure-react-carousel";
// import PropTypes from "prop-types";
// import "pure-react-carousel/dist/react-carousel.es.css";

// const CustomDotGroup = ({ slides, size }) => (
//     <Container textAlign="center">
//       <Button.Group size={size}>
//         {[...Array(slides).keys()].map(slide => (
//           <Button as={Dot} key={slide} icon="circle" slide={slide} />
//         ))}
//       </Button.Group>
//     </Container>
//   );
//   CustomDotGroup.defaultProps = {
//     size: "mini"
//   };
  
//   CustomDotGroup.propTypes = {
//     slides: PropTypes.number.isRequired,
//     size: PropTypes.string
//   };
  

function SearchDestination() {

    const [country, setCountry] = useState('')


    const [city, setCity] = useState('')


    function getdata() {
        Axios.get('http://localhost:3001/clinic/country')
            .then(res => setCountry(res.data))
    }

    // function getCity() {
    //     Axios.get('http://localhost:3001/Clinic/city')
    //         .then(response => setCity(response.data))
    // }

    useEffect(() => {
        getdata()
    }, [])
    console.log(country)

    return (
        <div className="searchDest_page">
            <h1 className='searchDest'>Search by destination</h1>
            
            <Link
                  to={{
                    pathname: '/resultdestination',
                    setCountry: 'Turquie'
                  }}>
                  <div className="imgDiv">
                  <img src={istanbul} alt='istanbul city' className='cityImg'/>
                  <Button className='btnCountry'>Turkey</Button>
                  </div>
                  </Link>
                  <br/>
            <Link
                  to={{
                    pathname: '/resultdestination',
                    setCountry: 'Allemagne'
                  }}>
                    <div className="imgDiv">
                    <img src={frankfurt} alt='istanbul city' className='cityImg'/>
                    <Button className='btnCountry'>Germany</Button>
                    </div>
                    </Link><br/>
             <Link
                  to={{
                    pathname: '/resultdestination',
                    setCountry: 'Chypre'
                  }}>
                    <div className="imgDiv">
                    <img src={cyprus} alt='istanbul city' className='cityImg'/>
                    <Button className='btnCountry'>Cyprus</Button>
                    </div>
                    </Link><br/>
            <Link
                  to={{
                    pathname: '/resultdestination',
                    setCountry: 'Hongrie'
                  }}>
                    <div className="imgDiv">
                    <img src={budapest} alt='istanbul city' className='cityImg'/>
                    <Button className='btnCountry'>Hungary</Button>
                    </div>
                    </Link><br/>
             <Link
                  to={{
                    pathname: '/resultdestination',
                    setCountry: 'Thailande'
                  }}>
                    <div className="imgDiv">
                    <img src={bangkok} alt='istanbul city' className='cityImg'/>
                    <Button className='btnCountry'>Thailand</Button>
                    </div>
                    </Link><br/>
             <Link
                  to={{
                    pathname: '/resultdestination',
                    setCountry: 'Pologne'
                  }}>
                    <div className="imgDiv">
                    <img src={krakow} alt='istanbul city' className='cityImg'/>
                    <Button className='btnCountry'>Poland</Button>
                    </div>
                    </Link>
{/*                    
                   <Segment id="segmentImg" attached="bottom">
                  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={3}
  ><br/>
    <Slider>
      <Slide tag="Istanbul" index={0}>
        <Image src="https://images.unsplash.com/photo-1580139644189-14a08f064717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="https://images.unsplash.com/photo-1577185816322-21f2a92b1342?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider></Segment> */}


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
            {/* {country.map(c => ( */}
            


        </div>

    )
}

export default SearchDestination