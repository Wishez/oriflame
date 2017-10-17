import React from 'React';

import Title from './Title';
import Text from './Text';

const SharesListItem = ({
	share,
	requestShare
}) => (
	<li style={{
			opacity: '1'
		}}
		className='sharesListItem'
	>	
		<Link to={`/shares/${share.id}`}
			onClick={requestShare(share.id)}>
			<Title block='sharesListItem'
				text={share.title} />
			<p className='sharesListItemMeta'>
				<span className='shareListItemMeta__date'>
					{share.published_date}
				</span>
			</p>
		</Link>
	</li>
);

export default SharesListItem;