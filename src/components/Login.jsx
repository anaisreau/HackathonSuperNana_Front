import React, {useState} from 'react'
import {login} from '../components/UserFonctions'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {Link, useHistory } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()

    const testLogin = (e) =>{
        e.preventDefault()

        const user = {
            email : email,
            password : password
        }
        
        
        login(user).then(res => {
            if(res) {
                history.push('/profile')
            }
        })

    }

    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
 <Grid.Column style={{ maxWidth: 450 }}>
  <Header as='h2' color='teal' textAlign='center'>
  Log-in to your account
  </Header>

<Form size='large' noValidate onSubmit={testLogin}><Segment stacked>
<Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' 
                
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
               <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            className="form-control"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button color='teal' fluid size='large' type='submit'>Login</Button>
          </Segment>
          </Form>
          <Message>New to us? <Link to ='/register'>
            <a>Sign Up</a></Link>
          </Message>
          </Grid.Column>
          </Grid>
              )}
              
export default Login

//   
//      
//         
//           onChange={e=> change(e)} value ={infos}/>
//          

//           
// 

// export default LoginForm