import React, { useState } from 'react'
import { register } from '../components/UserFonctions'
import {useHistory} from 'react-router-dom'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const  Register = () => {

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
        <Form onSubmit={createUser}>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' value={firstName}
            onChange={(e) => setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name'value={lastName}
            onChange={(e) => setLastName(e.target.value)} />
    </Form.Field>
    <Form.Field>
    <label>Last Name</label>
      <input value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='joe@schmoe.com'/>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>

    )
  }

export default Register