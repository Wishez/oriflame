import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import { 
	images,
	activities
 } from './../constants/conf.js';

import Section from './../components/Section';
import MainSlider from './../components/MainSlider';
import About from './../components/About';

class MainPageContainer extends Component {
	static PropTypes = {
		dispatch: PropTypes.func.isRequired,
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired
	}

	componentDidMount() {
	
    }

    componentDidUpdate() {
    
    }


	render() {

		return (
			<Section block='topSlider'>
				<MainSlider 
					images={images}
					dots={true}
  					infinite={true}
  					speed={1000}
  					fade={true}
  					cssEase='linear'
  					autoplay={true}
  					autoplaySpeed={5000}
  					responsive={[{
					    breakpoint: 800,
					      	settings: {
					      	  arrows: false
					      	}  
					    }
					]}
				/>
				<About activities={activities}/>
			</Section>
		);
	}
}

const mapStateToProps = state => {


	return {
	
	};
}

export default withRouter(connect(mapStateToProps)(MainPageContainer));