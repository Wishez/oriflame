import React from 'react';
import Slider from 'react-slick';
import Section from './Section';

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
						className='mainSlider__slide'
						style={{
							backgroundImage: `url("/static/business/img/slides/${image}")`
					}} />
				))
			}
		</Slider>
	</Section>
);

export default MainSlider;