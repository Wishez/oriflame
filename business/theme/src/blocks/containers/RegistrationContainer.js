import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Registration from './../components/Registration';
import { tryRegister } from './../actions/registrationActions.js';
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
		knowRules: false,
		removedMiddleNameField: false,
		isMaskedFields: false
	}

	componentDidMount() {
		// const { dispatch } = this.props;
		// dispatch(selectNavigationItem('fifthNavItem'));
		$('#dateField').mask("00/00/0000", {placeholder: "__/__/____"});
		this.maskFields(true);
    }



	submitRegistrationForm = (values, dispatch) => {
		dispatch(tryRegister(values));
		
	}

	allowRegister = () => {
		this.setState({
			knowRules: !this.state.knowRules
		});
	}

	switchState = (key, callback) => e => {
		this.setState({
			[key]: !this.state[key]
		});

		if (callback) callback();
	}
	maskFields = state => {
		const phoneMask = '+7 (000) 000-00-00';
		const passportMask = '0000-000000';
		const $phone = $('#phoneField');
		const $passport = $('#passportField');
		
		if (state) {
			$phone.mask(phoneMask);
			$passport.mask(passportMask);
		} else {
			$phone.unmask(phoneMask);
			$passport.unmask(passportMask);
		}
	}
	switchMask = () => {
		const { isMaskedFields } = this.state;

		this.maskFields(isMaskedFields)
	}

	render() {
		return (
			<main className='main'>
				<Registration {...this.props}
					{...this.state}
					submitRegistrationForm={this.submitRegistrationForm} 
					allowRegister={this.allowRegister}
					switchState={this.switchState}
					switchMask={this.switchMask}
				/>
			</main>
		);
	}
}

const mapStateToProps = state => {
	const { 
		registration,
		form
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