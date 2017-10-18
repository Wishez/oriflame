import React from 'React';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Section from './Section';
// import Figure from './Figure';


const Present = ({

}) => (
	<Section block='present'>
		<Link to='/registration'>
			<Button className='present__button defaultButton'
				content='Регистрация'
				size='huge' />
		</Link>
	</Section>
);

// <Figure width={100}
// 			height={100}
// 			maxWidth={100}
// 			url='#'
// 			block='present' />
export default Present;