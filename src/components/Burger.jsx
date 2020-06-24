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
      color ='blue'
      inverted
        as={Menu}
        animation='push'
        onHide={this.handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
          <Menu.Item as='a'><Link to ='/' onClick={this.handleSidebarHide}><Icon name ='home'></Icon>Home Page</Link></Menu.Item>
          <Menu.Item as='a'><Link to ='/traitment'onClick={this.handleSidebarHide}><Icon name ='treatment'></Icon>Search by Traitment</Link></Menu.Item>
          <Menu.Item as='a'><Link to ='/destination'onClick={this.handleSidebarHide}><Icon name ='plane'></Icon> Search by Destination</Link></Menu.Item>
          
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          
         
              <Menu color ='blue' inverted>
                <Menu.Item onClick={this.handleToggle}className='nav'>
                  <Icon name='sidebar' />
                </Menu.Item>

                <Menu.Item position='right'>
                  <Modal trigger={<Button color='red'>About us </Button>} basic size='small'>
    <Header icon='user' content='Who are us ?' />
    <Modal.Content>
      <p>
      We are four women who have converted professionally 
      and decided to take training at the Wild Code School in order 
      to begin web developers. 
      This is a project that we carried out during the Hackathon in partnership with Doctolib
      </p>
    </Modal.Content>
   
  </Modal>
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