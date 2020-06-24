import React from 'react'
import { Image, Button} from 'semantic-ui-react'
import logo from '../logo.png'
import '../components/Homepage.css'
import {Link} from 'react-router-dom'


function HomePage() {


    return (
        <>
    < img className ='logo' src={logo}/>    
 <div className='body'>




<p>
This website is intended to offer you health travel destinations according to two categories:
<ul>Research by treatment or need</ul>
<ul>Research by destination</ul>
Click on the images below and access your preferred search mode</p>

<div className='ResearchChoice'>
<Link to ='/traitment'>
    <Button color ='red'>Search by traitment or need <Image classname='photo' src ='https://www.peillon.fr/wp-content/uploads/2018/09/mutuelle-sante-795x413.jpg' 
alt='health'size='medium' circular width ='50%'/></Button>

</Link>
<Link to ='/destination'>
<Button color ='red'>Search by destination<Image classname='photo' src ='https://lh3.googleusercontent.com/proxy/Ua1ToxWpi-LldkPVduAVsRtMwY0Wb7XG2VXYOB7uH-Drgyiqym14qOSRiIOBVNPNq2pW6e8gUO0aN9QYQ2TCDWgN2SNxGfreD9C8C-d-MQ' alt='health'size='medium' circular/></Button>
</Link>
</div>
 </div>
</>
    )
}

export default HomePage