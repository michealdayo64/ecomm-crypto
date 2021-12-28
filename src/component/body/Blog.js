import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
//import { categoryAPI } from '../../Actions/products'

function Blog(props) {

    useEffect(() =>{
        
    }, [])

    return (
        <Container>
            <h3>Category</h3>
        </Container>
    )
}

const mapStateToProps = (state) =>{
    //console.log(state.products.category)
    return{
        //products: state.products,
        //auth: state.auth
    }
}

const mapDispatchToProps = {
    //categoryAPI
  }

export default connect(mapStateToProps, mapDispatchToProps)(Blog)

const Container = styled.div`
    margin-top: 100px;
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
