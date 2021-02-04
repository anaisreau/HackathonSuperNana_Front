import React, {useState} from 'react'
import {login} from '../components/UserFonctions'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {useHistory } from 'react-router-dom'
import '../components/Login.css'

const Login = () => {

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory()

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
          
         const handleLogin = (e) => {
    e.preventDefault();
      login(email, password).then(
        (res) => {
          if(res){
          history.push("/profile");}
          window.location.reload();
        },
      ).catch((err) => alert(err))
  };


    return(
      <div className='body2'>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 300 }} className='loginform'>
      <Header as='h2' color='black' textAlign='center'>
        Connectez vous à votre compte
      </Header>
      
      <Form size='large' onSubmit={handleLogin}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name="email"
              value={email} 
              onChange={onChangeEmail}
              validations={[required]}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
          />

          <Button color='blue' fluid >
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        Nouveau Parmis nous ? <a href='/register'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
  </div>
     
  );
};
              
              
export default Login
