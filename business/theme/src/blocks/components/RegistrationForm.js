import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Checkbox } from 'semantic-ui-react';
import RenderController from './RenderController';
import ReactHtmlParser from 'react-html-parser'

import { 
	required,
 	passwordLenght,
 	login,
 	loginLength,
 	passwordLength,
 	password,
 	email,
 	nameValidation,
 	surnameLength,
 	nameLength
} from './../constants/validation.js';

// import Captcha from './Captcha';

const RegistrationForm = ({
	submitRegisterForm,
	handleSubmit,
	allowRegister,
	knowRules,
	isRegistering,
	registerMessage
}) => (
	<form id='registrationForm'
		onSubmit={handleSubmit(submitRegisterForm.bind(this))}
		className='registerForm'>
		<Field component={RenderController}
			name='name'
			type='text'
			block='registrationFormController'
			validate={[required]}
			placeholder='Имя'
			maxLength='24'
		 />
		 <Field component={RenderController}
		 	name='patronymic'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Отчество'
			maxLength='30'
		 />
	
		 <Field component={RenderController}
		 	name='birthday'
		 	type='date'
		 	block='registrationFormController'
			validate={[required]}
		 />
		 <Field component={RenderController}
		 	name='patronymic'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Отчество'
			maxLength='30'
		 />
	
		<Field component={RenderController}
		 	name='patronymic'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Отчество'
			maxLength='30'
		 />
		<Field component={RenderController}
		 	name='patronymic'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Отчество'
			maxLength='30'
		 />
		<Field component={RenderController}
		 	name='patronymic'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Отчество'
			maxLength='30'
		 />
		<Field component={RenderController}
		 	name='patronymic'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Отчество'
			maxLength='30'
		 />
		<Field component={RenderController}
		 	name='patronymic'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Отчество'
			maxLength='30'
		 />
		<Field component={RenderController}
		 	name='patronymic'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Отчество'
			maxLength='30'
		 />
		 <Field component={RenderController}
		 	name='email'
		 	type='email'
		 	block='registrationFormController'
			validate={[required, email]}
			placeholder='Email'
			maxLength='100'
		 />


		 
		 <div className='registrationFormController'>
			 <Checkbox onClick={allowRegister}
			 	className='registrationFormController__check'
			    label={ReactHtmlParser(
			 	'Вы ознакомились с <a href=`/rules` class="not-follow">правилами</a> проекта')} />
		 </div>
		 <div className='registerFormButtons'>
			{registerMessage ? <strong className='formError'>{registerMessage}</strong> : ''}
			<br />
		 	<Button disabled={!knowRules}
		 		loading={isRegistering}
		 		className='registerFormButtons__button registerFormButtons__button--submit submit' 
		 	   	content='Зарегистрироваться'
		 	/>
		 </div>
	</form>
);


export default reduxForm({
	form: 'registrationForm'
})(RegistrationForm);
 
		 // <Field 
		 //   component={Captcha}
		 //   name='captcha'
		 //   block='registrationFormController'
		 //   validate={[required]} 
		 //  /> 
