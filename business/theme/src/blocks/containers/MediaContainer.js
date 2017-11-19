import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import YouTubeVideo from "stateful-react-youtube";

import { selectNavigationItem } from './../actions/navigationActions.js'; 
import { initNavigationState } from './../reducers/navigation.js';
import { tryGetVideos } from './../actions/sharesActions.js';

import Section from './../components/Section';
import Title from './../components/Title';
class MediaContainer extends Component {
	static PropTypes = {
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		const { dispatch } = this.props;
		localStorage.setItem('videos', JSON.stringify([]));

		
		dispatch(selectNavigationItem(initNavigationState.fifthNavItem.index));
		dispatch(tryGetVideos(this));
	}
	getVideosOrNull = () => {
		const videos = localStorage.getItem('videos');

		return !videos ? false : JSON.parse(videos); 
	}
	render() {
		
		const videos = this.getVideosOrNull();
		
		

		return (
			<main className='main'>
				<Section block='videos'>
					<ul className='media'>
						{videos ? 
							videos.map(video => (
								<li className='media__video' key={video.id}>
									<YouTubeVideo 
										videoId={video.videoId}
										className='media__video' 
									/>
								</li>
							)) : ''
						}
					</ul>
				</Section>
			</main>
		);
	}
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(MediaContainer));