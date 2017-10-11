import React from 'react';

import Paragraph from './Paragraph';

const Copyright = ({

}) => (
	<div className='copyright'>
	    <Paragraph block='copyright'
	      text='Copyright &copy;&nbsp;2016&nbsp;&mdash;&nbsp;Сайт независимого консультанта Oriflame' 
	    />
	    <Paragraph block='copyright'
	      text='Официальный сайт компании' 
	    >  
	      <a href='http://oriflame.com' 
	      className='paragraph__refer not-follow'> www.oriflame.com</a>
	    </Paragraph>
  	</div>
);

export default Copyright;