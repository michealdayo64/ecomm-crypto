import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { categoryAPI, productIdAPI } from '../../Actions/products'
import Helmet from 'react-helmet';

function Shop(props) {
    

    useEffect(() =>{
        props.categoryAPI();
        props.productIdAPI();
    }, [])

    return (
        <>
            <Container>
                 <Helmet>
           <title>Shop Page</title>
       </Helmet>
        
            <ProdCategory>
                
                <Category>
                    <h3><Link to="/shop" onClick={() => props.productIdAPI()}>All Category</Link></h3>
                    {
                        props.products.category.map((cat) =>
                            (
                            <div key={cat.pk}>
                                <p><Link to={`/shop/${cat.pk}`} onClick={() => props.productIdAPI(cat.pk)}>{cat.name}</Link></p>
                            </div>
                            )
                        )
                    }
                </Category>

                <Products>
                
               { props.products &&
                   <>
               {props.products.productById.map((p) => {
                    return(
                    <ProdList key={p.pk}>
                            <AList>
                            <Prod>
                                <img src={p.image} alt="" />
                                <div>
                                <p>Category: {p.category}</p>
                                <h3>{p.title}</h3>
                                </div>
                                <p>{p.description}</p>
                               <Link to={`/prod-detail/${p.pk}`}><button>View Product</button></Link>
                            </Prod>
                        </AList>
                    </ProdList>
                    )
                })
                
                }
                </>
             }
                </Products>
            </ProdCategory>
        </Container>
        
        </>
    )
}


const mapStateToProps = (state) =>{
    //console.log(state.products.productById)
    return{
        products: state.products
    }
}

const mapDispatchToProps = {
    categoryAPI,
    productIdAPI,
  }

export default connect(mapStateToProps, mapDispatchToProps)(Shop)

const Container = styled.div`
    max-width: 100%;
    padding-top: 100px;
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

`

const ProdCategory = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    //align-items: center;
    justify-content: space-between;
    position: relative;
    


`

const Category = styled.div`
    flex: 2;
    height: 200px;
    margin-right: 5px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
    
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
`

const Products = styled.div`
    flex: 10;
    display: flex;
    justify-content: space-between;
    //flex-direction: column;
    margin-left: 40px;
    align-items: center;
    
    
`

const ProdList = styled.div`
    display: flex;
    flex-direction: column;
   
    width: 100%;
`

const AList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    margin-bottom: 20px;
    
    
`

const Prod = styled.div`
    background: red;
    width: 300px;
    border-radius: 15px;
    img{
        height: 100px;
        width: 100%;
        border-radius: 15px;
        
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 5px;
        padding-right: 5px;
    }
    
    p{
        padding-left: 5px;
        color: white;
    }

    button{
        background: blue;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px;
        //margin-left: 100px;
        //margin-bottom: 3px;
        width: 100%;
        &:hover{
            background: grey;
            color: blue;
            cursor: pointer;
        }
    }
`
