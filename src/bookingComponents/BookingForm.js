import React from 'react';

class BookingForm extends React.Component {
    state = {
        day: 'Monday',
        time: '11:00',
        client: '1',
        service: '1'
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({ [name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBooking(this.state)
        this.setState({
            day: 'Monday',
            time: '11:00',
            client: '1',
            service: '1'
        })
    }
    render() {
        return (
            <div className="container">
                <h3>New Booking Form</h3>
                <form onSubmit={this.handleSubmit}>
                    {/* TODO: Use current client instead of input field. Pass in the props with the client id and remove the client input field */}
                    <label>Client Name</label>
                    <input type="text" name='client' placeholder="client name" value={this.state.client} onChange={this.handleChange}/>
                    
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
                    <select name='service' placeholder="service" value={this.state.service} onChange={this.handleChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    
                    <input type='submit' placeholder="Book" />
                </form>
            </div>
        )
    }
}

export default BookingForm