import React, { Fragment, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom';
//import PropTypes from 'prop-types'
import { connect, useSelector } from 'react-redux'
//import Alert from '../body/Alert';
import { logout } from '../../Actions/auth'
import { orderItemApi } from '../../Actions/orders'
//import { productCountAPI } from '../../Actions/products';
//import store from '../../store'

//import axios from "axios";

function Navbar(props) {
    
    useEffect(() => {
        props.orderItemApi()
    }, [])

   /* const [listPrice, setListPrice] = useState();

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/total-product/').
      then(res =>{
        console.log(res.data)
        setListPrice(res.data)
      })
    }, [])*/

    //const hh = store.getState().orders.add_to_cart

    //const count = useSelector(state => state)
  

    const authLinks = (
        <RightView>
            <CartView>
            
                    <Link to="/order-summary">
                    <img src="/images/add-to-cart.svg" alt="" />

                    { props.cart && (
                     <>
                        <div>
                        
                        <p>{props.cart.items.length}</p> 
                    
                        </div>
                        </>
                    )}
                        
                       
                    </Link>
                    
                
            </CartView>
            <button onClick={() => props.logout()}>Logout</button>
        </RightView>
    )

    const getLinks = (
        <Fragment>
            <Link style={{ color: "white" }} to="/login">Login</Link>
            <Link style={{ color: "white" }} to="/signup">SignUp</Link>
        </Fragment>
    )

    if(!props.auth.isAuthenticated){
        return <Redirect to="/login" />
    
    }

   

    return (
        <Container>
        
            <Wrap>
            <HeadLeft>
                <p><Link to="/" style={{ color: "green"}}>
                EcommCrypto
                </Link></p>
            </HeadLeft>
            <HeadMid>
            <p><Link to="/" style={{ color: "green"}}>
                Home
                </Link></p>
                <p><Link to="/shop" style={{ color: "green"}}>Shop</Link></p>
                <p><Link to="/crypto" style={{ color: "green"}}>Crypto TodoList</Link></p>
                <p><Link to="/blog" style={{ color: "green"}}>Blog</Link></p>
            </HeadMid>
            <HeadRight>
               { props.auth.isAuthenticated ? authLinks: getLinks }
            </HeadRight>
            </Wrap>
        </Container>
    )
}


const mapStateToPropsops = state => 
{
    console.log(state.orders.orderItem)
   return {
    auth: state.auth,
    products: state.products,
    cart: state.orders.orderItem
    
}}

const mapDispatchToProps = {
    logout,
    orderItemApi
    //productCountAPI
  }

export default connect(mapStateToPropsops, mapDispatchToProps)(Navbar)

const Container = styled.div`
    background-color: #090b13;
    height: 50px;
    color: green;
    border-bottom: 1px solid green;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
`


const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    color: white;
`

const HeadLeft = styled.div`
    display: flex;
    align-items: center;
    color: white;
    p{
        color: white;
        &:hover{
            cursor: pointer;

        }
    }
`

const HeadMid = styled.div`
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
    p{
            padding-left: 10px;
        padding-right: 10px;
        color: green;
        &:hover{
            cursor: pointer;
            
        }
    }
`

const HeadRight = styled.div`
    display: flex;
    align-items: center;
    color: white;
    p{
        &:hover{
            cursor: pointer;
            
        }
    }
`

const RightView = styled.div`
    display: flex;
    align-items: center;
    button{
        background: purple;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 3px;
        cursor: pointer;
        width: 70px;

        &:hover{
            border: 1px solid purple;
            background: white;
            color: purple;
        }
    }
`

const CartView = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    position: relative;
    p{
        color: black;
        background: red;
        padding: 1px;
        border-radius: 100%;
        font-size: 13px;
        position: absolute;
        right: 7px;
        top: -20px;
    }

    img{
        height: 30px;
        width: 30px;
        
    }

    svg{
        color: black;
    }
`
