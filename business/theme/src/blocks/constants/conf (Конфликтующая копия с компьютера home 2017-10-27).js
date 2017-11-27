
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
export const email = 'balagur08@yandex.ru ';
export const phone = '8 (926) 562-63-01';
export const address = 'М.О.,Одинцово,ул.Маршала Неделина 2, подъезд 1';
export const addressHref = 'https://www.google.ru/maps/place/%D1%83%D0%BB.+%D0%9C%D0%B0%D1%80%D1%88%D0%B0%D0%BB%D0%B0+%D0%9D%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D0%BD%D0%B0,+34%D0%90,+%D0%9E%D0%B4%D0%B8%D0%BD%D1%86%D0%BE%D0%B2%D0%BE,+%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+143003/@55.6802517,37.2679478,17z/data=!3m1!4b1!4m5!3m4!1s0x46b55046ce9e108b:0x7d0bc3e81e78997b!8m2!3d55.6802517!4d37.2701365?q=%D0%9C.%D0%9E.,%D0%9E%D0%B4%D0%B8%D0%BD%D1%86%D0%BE%D0%B2%D0%BE,%D1%83%D0%BB.%D0%9C%D0%B0%D1%80%D1%88%D0%B0%D0%BB%D0%B0+%D0%9D%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D0%BD%D0%B0+2,+%D0%BF%D0%BE%D0%B4%D1%8A%D0%B5%D0%B7%D0%B4+1&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjh9rDyjozXAhUsJJoKHVIUAAkQ_AUICigB';
export const map = '<iframe class="mapContainer__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.5024571557983!2d37.267947815927684!3d55.68025168053397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b55046ce9e108b%3A0x7d0bc3e81e78997b!2z0YPQuy4g0JzQsNGA0YjQsNC70LAg0J3QtdC00LXQu9C40L3QsCwgMzTQkCwg0J7QtNC40L3RhtC-0LLQviwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMTQzMDAz!5e0!3m2!1sru!2sru!4v1508946293845" width="100%" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>';
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
		refer: 'http://ru.oriflame.com/ecatalogue/105263?per=201609',
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
