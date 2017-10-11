import React from 'react';
import Slider from 'react-slick';

const MainSlider = ({
	...rest,
	images
}) => (
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
);

export default MainSlider;