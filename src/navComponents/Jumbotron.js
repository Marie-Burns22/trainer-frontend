import React from 'react'
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components'
import polecon1 from '../assets/polecon1.jpg'

const Jumbotron = () => {

    const Styles = styled.div`
        .jumbotron {
            background: url(${polecon1}) no-repeat fixed bottom;
            background-size: cover;
            color: #ccc;
            height: 200px;
            background-position: 
        }
    `;
    return (   
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Welcome to Vegas in Miami</h1>
                    <h4>The Famous Ms. Vegas</h4>
                    <p>Seasoned poleformer and award-winning competitive dancer offering online stretch and pole privates and in-person lessons and training packages in the South Florida Area.</p>
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default Jumbotron