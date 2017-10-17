import React from 'react';
import Slider from 'react-slick';
import Section from './Section';
import { Image } from 'semantic-ui-react';

const MainSlider = ({
	...rest,
	images
}) => (
    <Section block='topSlider'>
		<Slider className='mainSlider'
			{...rest}>
			{
				images.map((image, index) => (
					<figure key={index}
						style={{
							backgroundImage: `url("/static/business/img/slides/${image}")`
						}}
						className='mainSlider__slide'
					/>
				))
			}
		</Slider>
	</Section>
);

export default MainSlider;