import React from 'react';
import {connect} from "react-redux"
import {addBooking} from "../actions/bookingActions"
import { Form, Button} from 'react-bootstrap'



class BookingForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            day: 'Monday',
            time: '11:00',
            serviceId: '1'
        }
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({ [name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBooking(this.state, this.props.currentClient.id, this.props.history)
        this.setState({
            day: 'Monday',
            time: '11:00',
            serviceId: '1'
        })
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h3>New Booking Form</h3>
                
                <Form.Group controlId="bookingForm.daySelect">
                    <Form.Label>Day</Form.Label>
                    <Form.Control as="select" name='day' placeholder="day" value={this.state.day} onChange={this.handleChange}>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thusday</option>
                        <option>Friday</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="bookingForm.timeSelect">
                    <Form.Label>Time</Form.Label>
                    <Form.Control as="select" name='time' placeholder="time" value={this.state.time} onChange={this.handleChange}>
                        <option>10:00</option>
                        <option>13:00</option>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group controlId="bookingForm.serviceSelect">
                    <Form.Label>Service</Form.Label>
                    <Form.Control as="select" name='serviceId' placeholder="service" value={this.state.serviceId} onChange={this.handleChange} >
                        {this.props.services.map(service => <option value={service.id}>{service.attributes.name}</option>)}
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Book it!
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        services: state.services
    }
}

export default connect(mapStateToProps, {addBooking})(BookingForm)


// Options for Service drop down menu should be iterated from all services instead of hard coded.