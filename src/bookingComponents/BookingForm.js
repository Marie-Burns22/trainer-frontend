import React from 'react';
import {connect} from "react-redux"
import {addBooking} from "../actions/bookingActions"
import {getCurrentClient} from '../actions/currentClientAction'

class BookingForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            day: 'Monday',
            time: '11:00',
            serviceId: '1'
        }
    }

    componentDidMount() {
        this.props.getCurrentClient()
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({ [name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBooking(this.state, this.props.clientId, this.props.history)
        this.setState({
            day: 'Monday',
            time: '11:00',
            serviceId: '1'
        })
    }
    render() {
        return (
            <div className="container">
                <h3>New Booking Form</h3>
                <form onSubmit={this.handleSubmit}>
                    
                    <label>Day</label>
                    <select name='day' placeholder="day" value={this.state.day} onChange={this.handleChange}>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thusday</option>
                        <option>Friday</option>
                    </select>
                    
                    <label>Time</label>
                    <select name='time' placeholder="time" value={this.state.time} onChange={this.handleChange}>
                        <option>10:00</option>
                        <option>13:00</option>
                    </select>
                    
                    {/* TODO: service options mapped from an array of services */}
                    <label>Service</label>


                    <select name='serviceId' placeholder="service" value={this.state.serviceId} onChange={this.handleChange}>
                    {this.props.services.map(service => <option value={service.id}>{service.attributes.name}</option>)}
                        {/* <option>1</option>
                        <option>2</option>
                        <option>3</option> */}
                    </select>
                    
                    <input type='submit' placeholder="Book" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        clientId: state.currentClient.id,
        services: state.services
    }
}

export default connect(mapStateToProps, {addBooking, getCurrentClient})(BookingForm)


// Options for Service drop down menu should be iterated from all services instead of hard coded.