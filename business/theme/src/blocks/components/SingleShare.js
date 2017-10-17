import React from 'React';
import { Link } from 'react-router-dom';

import Title from './Title';
import Text from './Text';
import { Container } from 'semantic-ui-react';
const SingleShare = ({
	share
}) => (
	<article className='share'>
		<Container>
			<Title block='share' 
				text={share.title} 
			/>
			<Text block='share'>
				{share.text}
			</Text>
			<Link to='/shares' className='share__referToAll' />
		</Container>
	</article>
);

export default SingleShare;