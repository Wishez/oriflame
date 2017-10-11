import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Text = ({
	text,
	className
}) => (
	<div className={`textContainer ${className ? className : ''}`}>
		{ReactHtmlParser(text)}
	</div>
);

export default Text;