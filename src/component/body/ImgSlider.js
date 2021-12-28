import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

function ImgSlider() {
    return (
        <ImgCarosel {...settings}>
            <Wrap>
                <img src="/images/banner.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/banner.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/banner.jpg" alt="" />
            </Wrap>
        </ImgCarosel>
    )
}

export default ImgSlider

const ImgCarosel = styled(Slider)`

    margin: 0 auto;
    //background: red;
    width: 1300px;
    @media(max-width: 768px){
            width: 400px;
            .slick-list{
        overflow: visible;
    }

        }
    .slick-list{
        overflow: visible;
    }

    ul li button{
        &:before{
        font-size: 10px;
        color: rgb(150, 150, 171);
        }
    }

    li.slick-active button::before{
        color: white;
    }

    button{
        z-index: 1;
    }
`

const Wrap = styled.div`
    //overflow: hidden;
    cursor: pointer;
    @media(max-width: 768px){
            width: 400px;
        }
    
    img{
        border: 4px solid transparent;
        height: 400px;
        width: 100%;
        border-radius: 4px;
        box-shadow: 3px 2px 12px 3px rgba(0,0,0,0.75);
-webkit-box-shadow: 3px 2px 12px 3px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 2px 12px 3px rgba(0,0,0,0.75);
        transition-duration: 300ms;
        &:hover{
            border: 4px solid white;
        }

        @media(max-width: 768px){
            width: 400px;
        }
    }

`
