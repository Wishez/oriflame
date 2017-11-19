import React from 'react';
import Title from './Title';
import RegistrationForm from './RegistrationForm';
import Section from './Section';
import Paragraph from './Paragraph';

const Registration = ({
	registered,
	registerMessage,
	...rest
}) => (
	<Section block='registration'>
		<div className='registrationInfo'>
			<Title block='registrationInfo'
				text='Регистрация' 
			/>
			<Paragraph block='registrationInfo'
				text='Вы сразу же получаете скидку 20% на всю продукцию компании, качество которой смогли оценить люди более чем
в 60-ти странах мира.' />
			<Paragraph block='registrationInfo'
				text='Вы становитесь консультантом компании и участвуете в распродажах и акциях, где скидки достигают 80%. Приняв участие в стартовой 
программе, вы только подарков получите более чем на 15 ООО рублей.' />
			<Paragraph block='registrationInfo'
				text='Заказы делаете прямо из дома и получаете в удобном для вас месте. А если кроме красоты и здоровья вас интересует приличный заработок, не зависящий 
от кризисов, то регистрируясь на нашем сайте, вы попадаете в нашу команду, которая успешно работает с 1996 года. Обучение, поддержку и сопровождение 
на всех этапах вашей деятельности мы гарантируем.' />
		</div>
		{registered ?
			<p className='registration__message registration__message_succes'>
				В успешно прошли регистрацию!
			</p> :
 			<RegistrationForm
 				registerMessage={registerMessage}
 				{...rest} />
		}
	</Section>
);

export default Registration;