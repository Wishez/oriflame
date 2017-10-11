import React from 'React';

import Title from './Title';
import Text from './Text';

const AboutItem = ({
	title,
	text,
	style
}) => (
	<article className={`aboutItem aboutItem_${style}`}>
		<div className='imageContainer aboutItemImageContainer  '>
			<figure className={`imageContainer__image aboutItemImageContainer__image aboutItemImageContainer__image_${style}`} />
		</div>
		<Title block='aboutItem' 
			text={title} 
		/>
		<Text text={text} />
	</article>
);

export default AboutItem;