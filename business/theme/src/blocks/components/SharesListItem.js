import React from 'React';
import { Link } from 'react-router-dom';

import Title from './Title';
import Text from './Text';
import { convertDate } from './../constants/pureFunctions.js';
const SharesListItem = ({
	share
}) => (
	<li style={{
			opacity: '1'
		}}
		className='sharesListItem'
	>	
		<Link to={`/shares/${share.id}`}>
			<Title block='sharesListItem'
				text={share.title} />
			<p className='sharesListItemMeta'>
				<span className='shareListItemMeta__date'>
					{`Дата публикации: ${convertDate(share.published_date)}`}
				</span>
			</p>
		</Link>
	</li>
);

export default SharesListItem;