import React from 'React';
import { Link } from 'react-router-dom';

import Title from './Title';
import Text from './Text';
import { Container } from 'semantic-ui-react';
const SingleShare = ({
	share
}) => (
	<article className='share section'>
		<Container>
			<Title block='share' 
				text={share.title} 
			/>
			<Text className='share__text'
				text={share.text} />
			<Link to='/shares' className='share__referToAll'>
					Назад
			</Link>
		</Container>
	</article>
);

export default SingleShare;