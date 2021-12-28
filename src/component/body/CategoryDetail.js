import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { productDetailIdAPI } from '../../Actions/products'
import axios from "axios";
import store from '../../store'
import { orderItemApi } from '../../Actions/orders'
//import { addToCartAPI } from '../../Actions/orders'
//import { productCountAPI } from '../../Actions/products';

function CategoryDetail(props) {
    const { id } = useParams()
    
    /*{props.products.prodD &&(
        <>
         <p>{props.products.prodD.title}</p>
         </>
        )}*/
    

    useEffect(() =>{
        props.productDetailIdAPI(id)
    }, [])

    //const prevCountRef = useRef();
  

    const add = () =>{
        const userToken = store.getState().auth.token
        console.log(userToken)
        const config = {
            headers:{
                'Content-Type': 'application/json',
            }
        }
        if (userToken){
            config.headers['Authorization'] = `Token ${userToken}`
        }
        axios.post(`http://127.0.0.1:8000/api/add-to-cart-api/${id}/`, null, config)
        .then(res => {
            props.orderItemApi()
            console.log(res.data)
        }).catch(err =>{
            console.log(err.response.data)
        })

    }

   

    return (
            <Container>
                 <Helmet>
           <title></title>
       </Helmet>
       {props.products.prodD &&(
           <>
        <Wrapper>
            <Left>
                <ImageWrap>
                    <img src={props.products.prodD.image} alt="" />
                </ImageWrap>
            </Left>

            <Right>
            <ProductDetails>
                <h4>Category: {props.products.prodD.category}</h4>
                <h1>{props.products.prodD.title}</h1>
                { props.products.prodD.discount_price ? (
                    <>
                <del>${props.products.prodD.price}</del><span> ${props.products.prodD.discount_price}</span>    
                </>
                ): (
                    <>
                    <p>${props.products.prodD.price}</p>
                    </>
                )}
                
                <Buttons>
                    <Button1>
                        <img src="/images/heart.svg" alt="" />
                        <p>Whitelist</p>
                    </Button1>
                    <Button2 onClick = {() => add()}>
                        
                    <img src="/images/add-to-cart.svg" alt="" />
                     <p>Add to Cart</p>
                     
                    </Button2>
                    
                </Buttons>
                <div>
                    <p>Product Description</p>
                    <h4>{props.products.prodD.description}</h4>
                </div>
            </ProductDetails>
            </Right>
        </Wrapper>
        <br />
        
        </>
       )}
        </Container>
    )
}


const mapStateToProps = (state) =>{
    //console.log(state.products.productById)
    return{
        products: state.products
    }
}

const mapDispatchToProps = {
    productDetailIdAPI,
    //addToCartAPI,
    //productCountAPI
    orderItemApi
  }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail)

const Container = styled.div`
    max-width: 100%;
    padding-top: 100px;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    //justify-content: space-between;
    position: relative;
    width: 1200px;
    margin: 0 auto;

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        width: 400px;
        margin-bottom: 20px;
    }
`

const Left = styled.div`
    background: #f7f3f2;
    height: 400px;
    width: 700px;
    margin-right: 20px;
    border-radius: 10px;
    @media(max-width: 768px){
        margin-left: 10px;
        height: 300px;
        width: 450px;
        margin-right: 10px;
        margin-bottom: 5px;
    }
`

const Right = styled.div`
    //background: #f7f3f2;
    height: 400px;
    width: 700px;
    border-radius: 10px;
    margin-left: 20px;
    @media(max-width: 768px){
        margin-left: 10px;
        height: 300px;
        width: 450px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
`

const ImageWrap = styled.div`
    display: flex;
    height: 280px;
    width: 280px;
    //justify-content: center;
    border: 1px solid black;
    //background: white;
    //align-items: center;
    margin: auto;
    margin-top: 50px;
    box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.75);
    border-radius: 10px;

    @media(max-width: 768px){
        height: 200px;
    }

    img{
        height: 100%;
        width: 100%;
        border-radius: 10px;
    
    }
`

const ProductDetails = styled.div`
    margin: auto;
    height: 350px;
    background: white;
    width: 500px;
    margin-top: 20px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 3px;
    box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.75);
    border-radius: 10px;
    color: black;
    
    @media(max-width: 768px){
        width: 420px;
        height: 290px;

        
    }
    h1{
        color: green;
    }

    del{
        color: grey;
    }
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`

const Button1 = styled.button`
    display: flex;
    align-items: center;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    padding: 3px;
    justify-content: space-around;
    width: 120px;
    background: grey;
    color: white;
    cursor: pointer;

    img{
        height: 30px;
        width: 30px;
    }
`

const Button2 = styled(Button1)`
    background: green;
    color: white;
`

