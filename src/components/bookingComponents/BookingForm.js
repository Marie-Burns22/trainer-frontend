import React from 'react';

class BookingForm extends React.Component {
    state = {
        day: '',
        time: '',
        client: '',
        service: ''
    }

    handleChange = ({target: name, value}) => {
        this.setState({ name: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBooking(this.state)
        this.setState({
            day: '',
            time: '',
            client: '',
            service: ''
        })
    }
    render() {
        return (
            <div className="container">
                <h3>New Booking Form</h3>
                <form onSubmit={this.handleSubmit}>
                    {/* TODO: Use current user instead of input field */}
                    <label>Client Name</label>
                    <input type="text" name='client' placeholder="client name" value={this.state.client} onChange={this.handleChange}/>
                    <label>Day</label>
                    <input type="text" name='day' placeholder="day" value={this.state.day} onChange={this.handleChange} />
                    <label>Time</label>
                    <input type="text" name='time' placeholder="time" value={this.state.time} onChange={this.handleChange} />
                    <label>Service</label>
                    <input type="text" name='service' placeholder="service" value={this.state.service} onChange={this.handleChange} />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}