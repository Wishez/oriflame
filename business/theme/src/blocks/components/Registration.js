import React from 'react';
import Title from './Title';
import RegistrationForm from './RegistrationForm';
import Section from './Section';
import Paragraph from './Paragraph';

const Registration = ({
	registered,
	...rest
}) => (
	<Section block='registration'>
		<div className='registrationInfo'>
			<Title block='registrationInfo'
				text='Регистрация' 
			/>
			<Paragraph block='registrationInfo'
				text='Вы сразу же получаете <strong>скидку 20 - 32%</strong> 
				на более чем 700 наименований шведской продукции для красоты 
				и здоровья, качество которой смогли оценить люди <i>в 60-ти 
				странах мира</i> на протяжении 49-ти лет.' />
			<Paragraph block='registrationInfo'
				text='Вы становитесь <strong>любимым клиентом компании</strong> 
				и участвуете в еженедельных распродажах для «своих» где скидки 
				<i>достигают 80%</i>. Приняв участие в стартовой программе, 
				вы только подарков получите на <i>14 ООО рублей</i>.' />
			<Paragraph block='registrationInfo'
				text='Заказы делаете <strong>прямо из дома</strong> и получаете 
				<strong>в удобном для вас месте</strong>. А если кроме красоты 
				и здоровья вас интересует приличный заработок, не зависящий от 
				кризисов, то <i>регистрируясь</i> на нашем сайте, вы попадаете в 
				нашу команду, которая успешно работает с 1998 года. <i>Обучение, 
				поддержку и сопровождение</i> на всех этапах вашей деятельности мы 
				гарантируем.' />
		</div>
		{registered ?
			<p className='registration__message registration__message_succes'>
				{rest.registerMessage}
			</p> :
 			<RegistrationForm
 				{...rest} />
		}
	</Section>
);

export default Registration;