import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Header,
  Icon,
  Menu,
  Responsive,
  Modal,
  Sidebar,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './Burger.css'

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
      as={Sidebar.Pusher}>

      <Sidebar 
      className='nav'
      inverted
        as={Menu}
        animation='push'
        onHide={this.handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
          <Menu.Item as='a'><Link to ='/' onClick={this.handleSidebarHide}><Icon name ='home'></Icon>Home Page</Link></Menu.Item>
          <Menu.Item as='a'><Link to ='/searchTreatment'onClick={this.handleSidebarHide}><Icon name ='treatment'></Icon>Search by Treatment</Link></Menu.Item>
          <Menu.Item as='a'><Link to ='/searchDestination'onClick={this.handleSidebarHide}><Icon name ='plane'></Icon> Search by Destination</Link></Menu.Item>
          <Menu.Item as='a'><Link to ='/blog'onClick={this.handleSidebarHide}><Icon name ='newspaper outline'></Icon> Health Blog</Link></Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          
         
              <Menu className='nav' inverted>
                <Menu.Item onClick={this.handleToggle}className='nav'>
                  <Icon name='sidebar' />
                </Menu.Item>

                <Menu.Item position='left'>
                <Link to ='/' className='navLink' ><Icon name ='heartbeat' className='navIcon'></Icon>Health travel</Link>
                </Menu.Item>
              </Menu>
               
                
                
                 
              
           
          
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div className ='navBar'>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}



export default ResponsiveContainer