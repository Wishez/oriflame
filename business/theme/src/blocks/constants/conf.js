
// For second section
// Two styles - "dark" and "light"
export const activities = [
	{
		title: 'Oriflame',
		style: 'dark',
		text: '<p class="paragraph aboutItem__paragraph">Сегодня Орифлейм ー одна из самых быстрорастущих косметических компаний в мире. ' +
		'Она работает в 60 странах мира, в 30 из которых лидирует на рынке прямых продаж. ' +
		'Орифлейм предлагает широкий спектр высококачественных средств по уходу за кожей, парфюмерии и декоративной косметики.</p>'
	},
	{
		title: 'Продукция',
		style: 'light',
		text: '<p class="paragraph aboutItem__paragraph">Формулы косметических средств сочетают в себе и целительную магию старинных рецептов, созданных известными врачами прошлых тысячелетий, ' +
		'и последние достижения в области косметологии. ' +
		'Один из принципов Орифлейм (Oriflame) при создании новых средств ー это сочетание лучшего в науке с лучшим в природе. ' +
		'Продукция создается при помощи новейших технологий из высококачественных компонентов природного происхождения ー фруктов, цветов и других растений.</p>'
	},
	{
		title: 'Wellness',
		style: 'dark',
		text: '<p class="paragraph aboutItem__paragraph">Серия Wellness от Oriflame производится в соответствии со строжайшими стандартами качества.</p>' +
		'<p class="paragraph aboutItem__paragraph">В научной коллегии Oriflame всемирно признанные специалисты и эксперты с солидным опытом в разных областях исследований.</p>'
	},
	{
		title: 'Команда',
		style: 'light',
		text: '<p class="paragraph aboutItem__paragraph">Регистрируясь на нашем сайте, вы попадаете в нашу команду! Мы поможем вам научиться оформлять заказы, будем консультировать и сопровождать. ' + 
		'А если вы захотите зарабатывать с нами, научим всему необходимому.</p>'
	}
];
// Footer data
export const email = 'support@cosmeticsyou.ru';
export const phone = '8 (965) 158-14-81';
export const address = 'Ивантеевская д. 13 кор.1';
export const addressHref = 'https://www.google.ru/maps/place/%D0%98%D0%B2%D0%B0%D0%BD%D1%82%D0%B5%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+13%D0%BA1,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+107150/@55.818067,37.7239063,17z/data=!4m5!3m4!1s0x46b53450cf0645b9:0x869f26e9d7ad24d3!8m2!3d55.818067!4d37.726095';
export const map = '<iframe class="mapContainer__map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17933.626006869385!2d37.725323!3d55.815752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53450cf0645b9%3A0x869f26e9d7ad24d3!2z0JjQstCw0L3RgtC10LXQstGB0LrQsNGPINGD0LsuLCAxM9C6MSwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEwNzE1MA!5e0!3m2!1sru!2sru!4v1508326598031" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>';
// Sliders 
// Main Slider's images
export const images = [
	'slide1.jpg',
	'slide2.png',
	'slide3.jpg',
	'slide4.jpg',
	'slide5.jpg'
];
export const mainSliderCustoms = {
  dots: true,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
      breakpoint: 800,
      settings: {
        arrows: false
      }  
    }
  ]
};
export const catalogs = [
	{
		refer: 'http://ru.oriflame.com/ecatalogue/502181?per=201609',
		image: 'http://ru.oriflame.com/catalogue-image.png'
	}
];
export const catalogSliderCustoms = {
	lazyLoad: 'ondemand',
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	responsive: [{
		breakpoint: 800,
		settings: {
			slidesToShow: 2,
		}  
	}, {
		breakpoint: 991,
		settings: {
	   		slidesToShow: 3,
		}
	}]
};
