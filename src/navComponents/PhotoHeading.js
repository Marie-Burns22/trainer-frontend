import React from 'react'
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components'
import polecon1 from '../assets/polecon1.jpg'

const PhotoHeading = () => {

    const Styles = styled.div`
        .jumbo {
            background: url(${polecon1}) no-repeat fixed bottom;
            background-size: cover;
            color: #efefef;
            height: 250px;
            position: relative;
            z-index: -2;
        }

        .overlay {
            background-color: #000;
            opacity: 0.6;
            position: relative;
            top: 1;
            left: 0;
            right: 0;
            z-index: 11;
        }

        . {
            text-align: right;
        }
    `;
    
    return (   
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container className="text-right">
                    <h1>Welcome to Vegas in Miami</h1>
                    <h4>The Famous Ms. Vegas</h4>
                    
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default PhotoHeading