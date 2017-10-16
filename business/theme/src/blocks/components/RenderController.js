import React from 'react';
import { Input } from 'semantic-ui-react';

const RenderController = ({
	input,
	meta: {
		touched,
		error,
		warning
	},
	block,
	label,
	...rest
}) => (
	<div className={block}>
		<label className={`${block}__label`}>{label}</label>
		<Input {...input}
			{...rest}
			className={`${block}__input`} />
		 {touched && 
		 	((error && 
		 		<span className={`${block}__error`}>{error}</span>) || 
		 		(warning && <span className={`${block}__error`}>{warning}</span>))}
	</div>
);

export default RenderController;