import React from 'react';
import { connect } from 'react-redux';

class ClientsContainer extends React.Component {
    render() {
        return(
            <div>
              
            </div>
        )
    }
}
const mapStateToProps = ({ currentClient }) => {
    return {
        currentClient
    }
}
export default connect(mapStateToProps)(ClientsContainer)

//This component will use currentClient and logic to determine if to render client component?

