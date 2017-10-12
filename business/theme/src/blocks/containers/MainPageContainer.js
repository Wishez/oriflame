import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import { 
	images,
	catalogs,
	activities,
	catalogSliderCustoms,
	mainSliderCustoms
 } from './../constants/conf.js';

import Section from './../components/Section';
import MainSlider from './../components/MainSlider';
import About from './../components/About';
import Catalogs from './../components/Catalogs';

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
			console.log(catalogs);
		return (
			<Section block='topSlider'>
				<MainSlider images={images}
					{...mainSliderCustoms} />
				<About activities={activities}/>
				<Catalogs catalogs={catalogs}
					sliderCustoms={catalogSliderCustoms} />
			</Section>
		);
	}
}

const mapStateToProps = state => {


	return {
	
	};
}

export default withRouter(connect(mapStateToProps)(MainPageContainer));