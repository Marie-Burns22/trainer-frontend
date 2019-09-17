import React from 'react';
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'
import {deleteBooking} from '../actions/bookingActions'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'


const Booking = (props) => {

    const deleteBooking = () => {
        props.deleteBooking(props.clientId, props.booking.id)
    }

    return (

        <Card style={{ width: '18rem' }}>
            {props.booking.attributes.service 
            ?
            <React.Fragment>
                <Card.Body>
                    <Card.Title>{props.booking.attributes.service.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{props.booking.attributes.day}</ListGroupItem>
                    <ListGroupItem>{props.booking.attributes.time}</ListGroupItem>
                </ListGroup>
            </React.Fragment>
            :
            <Card.Body>
                <Card.Title>The service you booked has been canceled. Please contact your teacher to reschedule</Card.Title>
            </Card.Body>
            }
            <Card.Body>
                <Card.Link><Button onClick={deleteBooking} className="btn btn-sm btn-warning">Delete booking</Button></Card.Link>
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        clientId: state.currentClient.id
    }
}

export default connect(mapStateToProps, {deleteBooking})(Booking)