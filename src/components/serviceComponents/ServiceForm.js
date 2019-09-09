import React from 'react';

class ServiceForm extends React.Component {

    state = {
        name: '',
        category: '',
        price: '',
        request_method: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addService(this.state)
        // this.setState({
        //     name: '',
        //     category: '',
        //     price: '',
        //     request_method: ''
        // })
    }
    render() {
        return (
            <div>
                <h3>ServiceForm</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Service Name</label>
                    <input type='text' name='name' placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    <label>Service Category</label>
                    <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleChange}/>
                    <label>Service Price</label>
                    <input type='text' name="price" placeholder="Price" value={this.state.price} onChange={this.handleChange}/>
                    <label>Service Request Method</label>
                    <input type='text' name="request_method" placeholder="Request Method" value={this.state.request_method} onChange={this.handleChange}/>
                    <input type='submit' />
                </form>
                
            </div>
        )
    }
}

export default ServiceForm