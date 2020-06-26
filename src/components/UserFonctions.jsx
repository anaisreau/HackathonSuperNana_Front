import axios from 'axios'

export const register = newUser => {
    return axios.post('http://localhost:3001/users/register', {
        firt_name : newUser.firt_name,
        last_name : newUser.last_name,
        email : newUser.email,
        password : newUser.password
    })
    .then(res => console.log('Registred'))
}

export const login = user => {
    return axios.post('http://localhost:3001/users/login', {
        email : user.email,
        password : user.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    }) 
    .catch(err => console.error(err))
}