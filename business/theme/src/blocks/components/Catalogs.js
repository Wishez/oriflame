import React from 'react';

import Section from './Section';
import Title from './Title';
import CatalogsSlider from './CatalogsSlider';

const Catalogs = ({
	...rest
}) => (
	<Section block='catalogs'>
		<Title block='catalogs'
			text='Катологи' />
		<CatalogsSlider	{...rest} />
	</Section>
);

export default Catalogs;