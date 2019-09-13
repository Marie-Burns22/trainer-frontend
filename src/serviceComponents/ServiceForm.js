import React from 'react';
import {connect} from 'react-redux';

import {addService} from '../actions/serviceActions'

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
        this.props.addService(this.state)
        this.setState({
            name: '',
            category: '',
            price: '',

        })
    }
    render() {
        return (
            <div>
                <h3>ServiceForm</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Service Name</label>
                    <input type='text' name='name' placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    
                    <label>Service Category</label>
                    <select name="category" placeholder="Category" value={this.state.category} onChange={this.handleChange}>
                        <option>In Person</option>
                        <option>Online</option>
                    </select>
                    
                    <label>Service Price</label>
                    <input type='text' name="price" placeholder="Price" value={this.state.price} onChange={this.handleChange}/>
                    
                    <input type="submit" value="Create New Service"/>
                </form>
                
            </div>
        )
    }
}

export default connect(null, {addService})(ServiceForm)

// This form will not be rendered until the teacher model is added. Keep a route