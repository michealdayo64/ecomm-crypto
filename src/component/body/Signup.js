import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import { signup } from '../../Actions/auth';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { useAlert } from 'react-alert'




function Signup(props) {
    const alert = useAlert()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")

    const onChangeUsername = (e) =>{
        e.preventDefault()
        const userName = e.target.value;
        setUsername(userName)
    }

    const onChangeEmail = (e) => {
        e.preventDefault()
        const emailA = e.target.value;
        setEmail(emailA)
    }

    const onChangePassword = (e) => {
        e.preventDefault()
        const passwordA = e.target.value;
        setPassword(passwordA)
    }

    const onChangePassword1 = (e) => {
        e.preventDefault()
        const passwordA1 = e.target.value;
        setPassword1(passwordA1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password !== password1){
            alert.error("Password does not match")
    }else{
        props.signup({username, email, password, password1})
    setUsername("")
    setEmail("")
    setPassword("")
    setPassword1("")
    }
    
}


/*if(isAuthenticated){
    return <Redirect to="/" />
}*/
    
    return (
        <Container>
       <Helmet>
           <title>SignUp Page</title>
       </Helmet>
        
        <Wrapper>
        <h3>SignUp Here</h3>
        <form onSubmit={e => handleSubmit(e)}> 
            <LoginData>
                <input type="text" name="username" value={username} placeholder="Enter Userame" onChange={onChangeUsername} required />
                <br />
                <br />
                <input type="email" name="email" value={email} placeholder="Enter Userame" onChange={onChangeEmail} required />
                <br />
                <br />
                <input type="password" name="password" value={password} placeholder="Enter Password" onChange={onChangePassword} required /> 
                <br />
                <br />
                <input type="password" name="password1" value={password1} placeholder="Enter Password" onChange={onChangePassword1} required /> 
                <br />
                <br />
                <button type="submit">SignUp</button>
               
               
                <p><Link color="black" to="/signup">Login Here</Link></p>
            </LoginData>
        </form>
        
        </Wrapper>
       </Container>
    )

    
}

const mapStateToProps = state =>
{
    console.log(state)
    return{
        auth: state.auth,
        //alert: state.alert,
    }
}
export default connect(mapStateToProps, { signup })(Signup)


const Container = styled.div`
    width: 100%

`

const Wrapper = styled.div`
    width: 30%;
    margin: auto;
    margin-top: 20px;
    height: 300px;
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
