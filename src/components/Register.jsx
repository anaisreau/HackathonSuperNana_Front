import React, { useState } from 'react'
import { register } from '../components/UserFonctions'
import {useHistory, Link} from 'react-router-dom'
import { Form, Button, Grid, Header} from 'semantic-ui-react'
import  isEmail  from "validator/es/lib/isEmail";
import '../components/Login.css'

const  Register = () => {

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };
  
  
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


let history = useHistory()

  const createUser = (e) => {
    e.preventDefault()

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    }

    register(newUser).then(res => {
      history.push(`/login`)
    })
  }

    return (
      <Grid className='body2' textAlign='center' style={{ margin: 'auto' , width : '80%' ,height: '80vh' }} verticalAlign='middle' >
      <Grid.Column className='gridSignUp' >
      <Header as='h2' color='black' textAlign='center'>
        Create an account
      </Header>
        <Form onSubmit={createUser}>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Prénom' name='firstname' placeholder='Firstname' value={firstName} onChange={e => setFirstName(e.target.value)} validations={[required]}/>
            <Form.Input fluid label='Nom' name='lastname'placeholder='Last name' value={lastName} onChange={e => setLastName(e.target.value)} validations={[required]}/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Email' name='email'placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} validations={[required, validEmail]} />
            <Form.Input type='password' name='password'fluid label='Mot de passe' placeholder='Mot de passe' value={password} onChange={e => setPassword(e.target.value)} validations={[required, vpassword]}/>
          </Form.Group>
         
          
          <Button color='blue' type='submit'>Submit</Button>
        </Form>
        <br/>
        <Link to='/'><Button color='blue'>Return to Sign in Page</Button>
  </Link>
        </Grid.Column>
        </Grid>
    );
    };
  
    
  

export default Register