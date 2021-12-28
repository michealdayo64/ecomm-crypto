import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import { login } from '../../Actions/auth';
import Helmet from 'react-helmet';
import styled from 'styled-components';
//import { useAlert } from 'react-alert'




function Login(props) {
    //const alert = useAlert()
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const { username, password } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        props.login({username, password})
    }
    
if(props.auth.isAuthenticated){
    return <Redirect to="/" />

}
    return (
        <Container>
       <Helmet>
           <title>Login Page</title>
       </Helmet>
        
        <Wrapper>
        <h3>Login Here</h3>
        <form onSubmit={e => onSubmit(e)}> 
            <LoginData>
                <input type="text" name="username" value={username} placeholder="Enter Userame" onChange={e => onChange(e)} required />
                <br />
                <br />
                <input type="password" name="password" value={password} placeholder="Enter Password" onChange={onChange} required /> 
                <br />
                <br />
                <button type="submit">Login</button>
                <p><Link style={{ color: "black", textAlign: 'center' }} to="/signup">SignUp Here</Link></p>
            </LoginData>
            
        </form>
        </Wrapper>
       </Container>
    )
}


const mapStateToProps = state => {
    //console.log(state)
    return{
        auth: state.auth
    }
    
}


export default connect(mapStateToProps, { login })(Login)

const Container = styled.div`
    width: 100%

`

const Wrapper = styled.div`
    width: 30%;
    margin: auto;
    margin-top: 20px;
    height: 250px;
    border: solid grey 1px;
    border-radius: 5px;
    padding-bottom: 40px;

    h3{
        color: green;
        text-align: center;
        
    }
`

const LoginData = styled.div`
    margin: auto;
    width: 45%;
    color: black;
    input{
        padding: 10px;
        border-radius: 5px;
        width: 88%;
    }

    button{
        width: 100%;
        background-color: white;
        color: black;
        padding: 10px;
        border-radius: 5px;
        border: solid green 2px;
        &:hover{
            background-color: green;
            cursor: pointer;
            color: white;
            border: none;
        }
    }
`
