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
					<Image key={index}
						data-src={`/static/business/img/slides/${image}`}
						className='mainSlider__slide'
					/>
				))
			}
		</Slider>
	</Section>
);

export default MainSlider;