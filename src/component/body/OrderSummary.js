import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
//import axios from "axios";
import { orderItemApi } from '../../Actions/orders'
import { connect } from 'react-redux';
import axios from "axios";
import store from '../../store'



function OrderSummary(props) {

    useEffect(() =>{
        props.orderItemApi()
    }, [])

    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  }

  const add = (id) =>{
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

const removeSingleItem = (id) =>{
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
    axios.post(`http://127.0.0.1:8000/api/remove-single-single-item-api/${id}/`, null, config)
    .then(res => {
        props.orderItemApi()
        console.log(res.data)
    }).catch(err =>{
        console.log(err.response.data)
    })

}

const removeFromCart = (id) =>{
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
    axios.post(`http://127.0.0.1:8000/api/remove-from-cart-api/${id}/`, null, config)
    .then(res => {
        props.orderItemApi()
        console.log(res.data)
    }).catch(err =>{
        console.log(err.response.data)
    })

}



  const options = ["Shipping Delivery - $50", "Billing Delivery - $50", "Address Delivery - $50"];
  

    return (
        <Container>
            <Wrapper>
                <LeftSec>
                    <div>
                        <h2>Shopping Cart</h2>
                        <h2>3 Items</h2>
                    </div>
                    <hr></hr>
                    <HeadLeft>
                        <p>PRODUCT DETAILS</p>
                        <Right>
                            <p>QUANTITY</p>
                            <p>PRICE</p>
                            <p>TOTAL</p>
                        </Right>
                    </HeadLeft>
                    { props.orders && ( 
                        <> { props.orders.orderItem.items.map((ord) => {
                            return(
                    <Section key={ord.pk}>
                        
                        
                        <ImagText>
                            <img src={ord.item.image} alt="" />
                            <Text>
                                <p>{ord.item.category}</p>
                                <p>{ord.item.title}</p>
                                <button onClick={() => removeFromCart(ord.item.pk)}>Remove</button>
                            </Text>
                        </ImagText>
                        <TextRight>
                            
                        <Quantity>
                            <img src="/images/minus_icon.svg" alt="" onClick={() => removeSingleItem(ord.item.pk)} />
                                <p>{ord.quantity}</p>
                            <img src="/images/plus_icon.svg" alt="" onClick={() => add(ord.item.pk)} />
                            </Quantity>
                            {  ord.item.discount_price ? (
                                <>
                                <p>${ord.item.discount_price}</p>
                            <p>{ord.quantity * ord.item.discount_price}</p>
                                </>
                            ) : (
                                <>
                                <p>${ord.item.price}</p>
                            <p>{ord.quantity * ord.item.price}</p>
                                </>
                            )
                            
                            }
                            
                        </TextRight>
                            
                        

                    </Section>
                        )})}
                    </>
                    )}
                   
                </LeftSec>
                <RightSec>
                    <RightWrap>
                        <SecRap>
                        <h2>Order Summary</h2>
                        <hr></hr>

                        <ItemPrice>
                            <p>Item 3</p>
                            <p>$450</p>
                        </ItemPrice>
                        <h3>Shipping</h3>
                        <DropBtnHead onClick={toggling}>
                             {
                                  selectedOption ? ( <>
                                  <p>{ selectedOption }</p> <img src="/images/arrow-down.png" alt="" /> </> ):( <>
                                  <p>Select type</p> <img src="/images/arrow-down.png" alt="" />
                                  </>
                                  )
                             }
                            
                           
                                  
                        </DropBtnHead>
                        { isOpen && (
                        <DropButtonListContainer>
                            <DropDownList>
                            {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
                            </DropDownList>
                        </DropButtonListContainer>
                        )}
                        <br />
                        <h3>Promo code</h3>
                        <br />
                       <input type="text" /> 
                       <br />
                       <br />
                       <button>Apply</button>
                       <br />
                       <br />
                       <br />
                        </SecRap>
                    </RightWrap>
                </RightSec>
            </Wrapper>
            <br />
            <br />
        </Container>
    )
}

const mapStateToProps = state => {
    return{
        orders: state.orders
    }
}

const mapDispatchToProps = {
    orderItemApi,
    //removeFromCartAPI,
    //removeSingeItemAPI,
    //addToCartAPI
  }

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary)

const Container = styled.div`
    max-width: 100%;
    padding-top: 100px;
`

const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    //background: red;
    display: flex;
    justify-content: space-between;
`

const LeftSec = styled.div`
    //background: red;
    width: 800px;
    padding-left: 10px;
    padding-right: 10px;
    div{
        display: flex;
        justify-content: space-between;
        
    }
`

const RightSec = styled.div`
    width: 400px;
    //background: green;
    color: black;
`

const HeadLeft = styled.div`
    display: flex;
    justify-content: space-between;
    
    
`

const Right = styled.div`
    display: flex;
    justify-content: space-between;
    //background: red;
    width: 400px;
    
`

const Section = styled(HeadLeft)`
    margin-top: 20px;
    div{
        display:flex;
        //flex-direction: column;
    }

`

const ImagText = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    width: 200px;
    //background: red;
    
    img{
        height: 120px;
        width: 120px;
        border-radius: 10px;
    }
    

`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    //height: 50px;
`

const TextRight = styled(Right)`
    p{
        text-align: left;
        padding-right: 20px;
    }
`

const Quantity = styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 100px;
        
        width: 100px;
        
    img{
        height: 20px;
        width: 20px;

    }

    p{
        //background: red;
        border-radius: 5px;
        padding: 7px;
        padding-left: 15px;
        padding-right: 15px;
        border: 1px solid black;
        
    }
`

const RightWrap = styled.div`
    background: #f0f2f5;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    
`

const SecRap = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    

    h3{
        margin-top: -5px;
    }

    input{
        width: 100%;
    }
`

const ItemPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p{
        font-weight: 400;
    }
`

const DropBtnHead = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;


    img{
        width: 20px;
        height: 20px;
    }
`


const DropButtonListContainer = styled.div`
    z-index: 100;
`

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  
  &:first-child {
    padding-top: 0.8em;
  }
`

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  
`
