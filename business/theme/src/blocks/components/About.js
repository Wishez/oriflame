import React from 'React';
import Section from './Section';
import AboutItem from './AboutItem';

const About = ({
	activities
}) => (
	<Section block='about'>
		{
			activities.map((activiti ,index) => (
				<AboutItem 
					key={index} 
					title={activiti.title}
					text={activiti.text}
					style={activiti.style}
				/>
			))
		}
	</Section>
);

export default About;