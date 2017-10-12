import React from 'react';
import Slider from 'react-slick';
import { Image } from 'semantic-ui-react';

const CatalogsSlider = ({
	...rest,
	catalogs
}) => (
	<Slider className='catalogsSlider'
		{...rest}>
		{
			catalogs.map((catalog, index) => (
				<a key={index}
				   className='catalogsSlider__refer not-follow'
				   href={catalog.refer}>
					<Image src={catalog.image}
						className='catalogsSlider__slide' />
				</a>
			))
		}
	</Slider>
);

export default CatalogsSlider;