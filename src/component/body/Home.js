import React, {useEffect} from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import ImgSlider from './ImgSlider';
import { orderItemApi } from '../../Actions/orders'

function Home(props) {
    useEffect(() => {
        props.orderItemApi()
    }, [])

    return (
        <Container>
             <Helmet>
           <title>Home Page</title>
       </Helmet>
        
            <ImgSlider />
            <div>
                <h1>Our Services</h1>
                <Service>
                    <Serve>
                    hey
                    </Serve>
                    <Serve>hey</Serve>
                    <Serve>hey</Serve>
                </Service>
            </div>
            <br />
            <br />
        </Container>
    )
}

const mapStateToProps = state => {
    //console.log(state)
    return{
        auth: state.auth
    }
    
}

const mapDispatchToProps = {
    //logout,
    orderItemApi
    //productCountAPI
  }


export default connect(mapStateToProps, mapDispatchToProps)(Home)

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    padding-top: 100px;
    position: relative;
    overflow-x: hidden;

    @media(max-width: 768px){
            //width: 400px;
            &:before{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
        }


    &:before{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    div{
        h1{
            text-align: center;
        }
    }
`


const Service = styled.div`
    width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    
    
    @media(max-width: 768px){
        width: 400px;
        display: flex;
        flex-direction: column;
        //justify-content: space-between;
        align-items: center;
    }
`

const Serve = styled.div`
    border-radius: 10px;
    width: 350px;
    height: 200px;
    border: 1px solid black;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);



    @media(max-width: 768px){
        width: 400px;
        height: 200px;
        margin-top: 20px;
    }
    
`