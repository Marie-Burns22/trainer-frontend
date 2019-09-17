import React from 'react';
import {connect} from 'react-redux';
import {addService} from '../actions/serviceActions'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ServiceForm extends React.Component {

    state = {
        name: '',
        category: 'In Person',
        price: '',

    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addService(this.state, this.props.history)
        this.setState({
            name: '',
            category: '',
            price: '',

        })
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
            <h4>New Service Form</h4>
                <Form.Group controlId="serviceForm.ControlInput1">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control type='text' name='name' placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="serviceForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type='text' name='price' placeholder="Price" value={this.state.price} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="serviceForm.ControlSelect1">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" name="category" placeholder="Category" value={this.state.category} onChange={this.handleChange}>
                        <option>In Person</option>
                        <option>Online</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">Create New Service</Button>  
            </Form>
        )
    }
}

export default connect(null, {addService})(ServiceForm)

// This form will not be rendered until the teacher model is added. Keep a route