import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Section from './../components/Section';
import MainSlider from './../components/MainSlider';

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
					images={[ 'slide1.png', 'slide2.png', 'slide3.png', 'slide4.png', 'slide5.png' ]}
					dots={true}
  					infinite={true}
  					speed={500}
  					fade={true}
  					cssEase='linear'
  					autoplay={true}
  					autoplaySpeed={2000}
  					responsive={[{
					    breakpoint: 800,
					      	settings: {
					      	  arrows: false
					      	}  
					    }
					]}
				/>
			</Section>
		);
	}
}

const mapStateToProps = state => {


	return {
	
	};
}

export default withRouter(connect(mapStateToProps)(MainPageContainer));