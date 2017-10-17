import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
	tryGetShare,
	clearShares
 } from './../actions/sharesActions.js';
import SingleShare from './../components/SingleShare';

class SingleShareContainer extends Component {
	static PropTypes = {
		share: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired,
		match: PropTypes.object.isRequired
	}

	componentDidMount() {
		const { dispatch } = this.props;
		const { shareId } = this.props.match.params;

		dispatch(tryGetShare(shareId));
    }

    componentDidUpdate() {
    
    }

	render() {
		dispatch(clearShares());
		return (
			<main className='main'>
				<SingleShare {...this.props} />
			</main>
		);
	}
}

const mapStateToProps = state => {
	const { shares } = state;
	const { share } = shares
	return {
		share
	};
}

export default withRouter(connect(mapStateToProps)(SingleShareContainer));