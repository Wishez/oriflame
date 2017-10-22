import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Embed } from 'semantic-ui-react';

import { selectNavigationItem } from './../actions/navigationActions.js'; 
import { initNavigationState } from './../reducers/navigation.js';

import Section from './../components/Section';
import Title from './../components/Title';

class MediaContainer extends Component {
	static PropTypes = {
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(selectNavigationItem(initNavigationState.fifthNavItem.index));
	}

	render() {
		return (
			<main className='main'>
				<Section block='media'>
					<Embed className='media__video'
						id='g3aI1uMFV-Q'
						placeholder=''
    					source='youtube'
    				/>
    				<Embed className='media__video'
						id='94Zxxf-4_VE'
						placeholder=''
    					source='youtube'
    				/>
    				<Embed className='media__video'
						id='KuHhkFDJKP8'
						placeholder=''
    					source='youtube'
    				/>
				</Section>
			</main>
		);
	}
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(MediaContainer));