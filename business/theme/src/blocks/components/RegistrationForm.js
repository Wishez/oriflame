import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Checkbox } from 'semantic-ui-react';
import RenderController from './RenderController';
import ReactHtmlParser from 'react-html-parser'

import { 
	required,
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
	registerMessage,
	switchState,
	removedMiddleNameField,
	switchMask
}) => (
	<form id='registrationForm'
		onSubmit={handleSubmit(submitRegisterForm.bind(this))}
		className='registerForm'>
		<Field component={RenderController}
			name='first_name'
			type='text'
			block='registrationFormController'
			validate={[required]}
			placeholder='Хэнк'
			maxLength='24'
			label='Имя'
		 />
		 <Field component={RenderController}
		 	name='last_name'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Реардэн'
			maxLength='30'
			label='Фамилия'
		 />
	
		<div onClick={switchState('removedMiddleNameField')} className='registrationFormController registrationFormController_narrow registrationFormController_checkbox'>
			<Checkbox 
			 	className='registrationFormController__checkbox'
			 	name='empty_middle_name'
			    label={
			 	'Нет отчества'} />
		 </div>
		 <Field component={RenderController}
		 	name='middle_name'
		 	type='text'
		 	style={removedMiddleNameField ? {
				opacity: 0,
				maxHeight: 0
		 	} : {}}
		 	modifier='switched'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Иванов'
			maxLength='30'
			label='Отчество'
		 />
		 <Field component={RenderController}
		 	name='birthday'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			id='dateField'
			label='День рождения'
		 />
		 <div onClick={switchState('isMaskedFields', switchMask)}
		 	className='registrationFormController registrationFormController_narrow registrationFormController_checkbox'>
			<Checkbox 
			 	className='registrationFormController__checkbox'
			 	name='citizenship'
			    label={
			 	'Не гражданин РФ'} />
		 </div>
		 <Field component={RenderController}
		 	name='passport_data'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='1234-654321'
			maxLength='30'
			id='passportField'
			label='Серия и номер паспорта'
		 />
	
		<Field component={RenderController}
		 	name='phone_number'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='+7 (964) 555-65-75 '
			maxLength='25'
			id='phoneField'
			label='Номер телефона'
		 />
		<Field component={RenderController}
		 	name='city'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Москва, Лондон, Токио'
			maxLength='50'
			label='Город'
		 />
		<Field component={RenderController}
		 	name='region'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Московская, Тульская'
			maxLength='50'
			label='Область'
		 />
		<Field component={RenderController}
		 	name='street'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Тисовая, Бейкер-стрит, Пушкина '
			maxLength='50'
			label='Улица'
		 />
		<Field component={RenderController}
		 	name='num_home'
		 	type='text'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='85A'
			maxLength='8'
			label='Номер дома'
		 />
		<Field component={RenderController}
		 	name='num_apartment'
		 	type='number'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='28'
			max='600'
			min='1'
			label='Номер квартиры'
		 />
		 <Field component={RenderController}
		 	name='email'
		 	type='email'
		 	block='registrationFormController'
			validate={[required, email]}
			placeholder='your_email@mail.ru'
			maxLength='100'
			label='E-mail'
		 />
		 
		 <div className='registrationFormController'>
		 	<div class='registrationFormController__rules'>
		 		<a href='https://ru-eshop.oriflame.com/iframe/custom/ru/consultant/Registration.pdf' class='not-follow'>Договор</a>
				<br />
		 		<a href='https://ru-eshop.oriflame.com/iframe/custom/ru/consultant/Registration.pdf' class='not-follow'>Условия</a>
		 	</div>
			<Checkbox onClick={allowRegister}
			 	className='registrationFormController__checkRules'
			    label={
			 	'Вы ознакомились с договором и условиями?'} />
		 </div>
		 <div className='registrationFormButtons'>
			{registerMessage ? <strong className='registrationFormButtons__formError formError'>{registerMessage}</strong> : ''}
			<br />
		 	<Button disabled={!knowRules}
		 		loading={isRegistering}
		 		className='registrationFormButtons__button registrationFormButtons__button_submit submit purpleButton' 
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
