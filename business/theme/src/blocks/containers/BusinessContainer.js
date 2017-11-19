import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  Image } from 'semantic-ui-react';
import YouTubeVideo from "stateful-react-youtube";

import { selectNavigationItem } from './../actions/navigationActions.js'; 
import { initNavigationState } from './../reducers/navigation.js';

import Section from './../components/Section';
import Title from './../components/Title';
import Paragraph from './../components/Paragraph';

class BusinessContainer extends Component {
	static PropTypes = {
		dispatch: PropTypes.func.isRequired
	}
	
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(selectNavigationItem(initNavigationState.thirdNavItem.index));
	}
	render() {
		return (
			<main className='main'>
				<Section block='business'>
					<Title block='business'
						text='Сотрудничая с Орифлэйм, Вы сможете:' />
					<Paragraph block='business'
						text='Отлично выглядить, покупать косметику со скидкой от 20%. Зарабатывать, совмещая с основной работой. 
Начать свой высокодоходный бизнес без стартового капитала.' />
					<Image className='business__image'
						centered src='./static/business/img/business.jpg' />
					<Title block='business'
						text='Возможности Орифлэйм:' />
					<Paragraph block='business'
						text='Оформив регистрацию в компании у Вас появится возможность покупать продукцию со скидкой от 20%.Так же Вы становитесь участником акций компании, 
по которым дарят множество подарков.' />
						<Paragraph block='business'
							text='Построение своей команды – это приглашение в Орифлэйм других людей в свою группу.' />
						<Paragraph block='business'
							text='Компания Орифлэйм ежекаталожно выплачивает премии в зависимости от 
							общего товарооборота всей созданной Вами группы консультантов. Чем больше товарооборот команды, тем больший процент Вам начисляют(от 3% до 22%).' />
						<Paragraph block='business'
							text='Это очень прибыльный вид деятельности, многие уже зарабатывают таким 
							образом более 100 000 рублей в месяц!' />
						<Paragraph block='business'
						text='Большинство людей даже не догадываются о возможности сотруднечества 
							с Орифлэйм и полагают, что можно зарабатывать только продавая косметику. 
							  Но именно занимаясь приглашением и обучением людей многие достигли 
							  потрясающих доходов и финансовой независимости.' />
					<div className='business__video'>
    					<YouTubeVideo videoId='94Zxxf-4_VE' />
    				</div>
				</Section>
			</main>
		);
	}
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(BusinessContainer));