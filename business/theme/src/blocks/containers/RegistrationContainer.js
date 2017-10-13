import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import Registration from './../components/Registration';
import { tryRegister } from './../actions/accountActions.js';
import { selectNavigationItem } from './../actions/navigationActions.js';


class RegistrationContainer extends Component {
	static PropTypes = {
		registered: PropTypes.bool.isRequired,
		isRegistering: PropTypes.bool.isRequired,
		dispatch: PropTypes.func.isRequired,
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired
	}
	// Переменная для чек-бокса.
	state = {
		knowRules: false
	}

	componentDidMount() {
		// const { dispatch } = this.props;
		// dispatch(selectNavigationItem('fifthNavItem'));

    }

    componentDidUpdate() {
    	
    }

	submitRegisterForm = (values, dispatch) => {
		
		dispatch(tryRegister('main', values));
		
	}

	allowRegister = e => {
		this.setState({
			knowRules: !this.state.knowRules
		});
	}

	render() {
		return (
			<main className='main'>
				<Registration {...this.props}
					{...this.state}
					submitRegisterForm={this.submitRegisterForm} 
					allowRegister={this.allowRegister}
				/>
			</main>
		);
	}
}

const mapStateToProps = state => {
	const { 
		registration
	} = state;
		
	const { 
		isRegistering,
		registered,
		registerMessage
	} = registration;


	return {
		isRegistering,
		registered,
		message: registerMessage
	};
}

export default withRouter(connect(mapStateToProps)(RegistrationContainer));