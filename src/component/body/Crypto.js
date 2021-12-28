import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
//import { create } from "ipfs-http-client";
import axios from "axios";
import { Link } from 'react-router-dom';

//const client = create('https://ipfs.infura.io:5001/api/v0');


function Crypto() {
    //const [file, setFile] = useState(null);
    const [listPrice, setListPrice] = useState();

    useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false').
      then(res =>{
        //console.log(res.data)
        setListPrice(res.data)
      })
    }, [])

    return (
        <Container>
            <AllTable>
              <Link to="/crypto-detail"><button>TodoList</button></Link>
              
            <TableHead>
              <p>Symbol</p>
              <p>Name</p>
              <p>Image</p>
              <p>Current Price</p>
            </TableHead>
            { listPrice && (
              <> { listPrice.map((li) => {
                return(
                <TableBody key={li.id}>
              <p>{li.symbol}</p>
              <p>{li.name}</p>
              <img src={li.image} alt="" />
              <p>{li.current_price}</p>
            </TableBody>
                )
              })}
            
            </>
            )}
            </AllTable>

         <br />
         <br />
            
        </Container>
    )
}

export default Crypto

const Container = styled.div`
    padding-top: 100px;
    //width: 1200;
`

const AllTable = styled.div`
    //background: red;
    margin: 0 auto;
    width: 800px;
    //background: red;

    button{
      background: green;
      border: none;
      border-radius: 5px;
      color: white;
      padding: 5px;
      font-weight: 400;
      font-size: 20px;
      //text-align: right;
      &:hover{
        color: green;
        background: white;

      }
    }

`

const TableHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-bottom: 2px solid white;
    text-align: left;
`

const TableBody = styled(TableHead)`
     
    img{
      height: 30px;
      width: 30px;
    }

`




