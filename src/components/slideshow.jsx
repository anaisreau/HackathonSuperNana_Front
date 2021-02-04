import React from 'react'
import {Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const images = [
    'https://storage.googleapis.com/prod-quelleenergie-wp-uploads-a5de24da/uploads/2016/06/titre-top-10-ville-plus-ecolo-monde-une-min.jpg',
    'https://storage.googleapis.com/prod-quelleenergie-wp-uploads-a5de24da/uploads/2016/09/ville-future700250-1.jpg',
    'https://www.okvoyage.com/wp-content/uploads/2020/03/sydney-ville-australienne-1920x500.jpg',
    'https://i.pinimg.com/originals/b1/b8/0b/b1b80bf24879cedc21d6f7aca6ad40a3.gif'
  ];


  


  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt='image'/>)
          }
        </Zoom>
      </div>
    )
}

export default Slideshow