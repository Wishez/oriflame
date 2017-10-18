import React from 'react';
import { Link } from 'react-router-dom';

import Title from './Title';
import SharesListItem from './SharesListItem';

const SharesList = ({
	shares
}) => (
	<ul className='sharesList'>
		{	
			shares.map(share => (
				<SharesListItem key={share.id}
					share={share} />
			))
		}
	</ul>
);

export default SharesList;