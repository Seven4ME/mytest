import React, {Component} from 'react';
import Slider from "react-slick";
import svetlana from '../../static/img/svetlana.png';
import illya from '../../static/img/testimonial__illiya.png';
import tatiana from '../../static/img/tatiana.png';
import sergey from '../../static/img/sergey.jpg';

import "slick-carousel/slick/slick-theme.css";


export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
				infinite: true,
				speed: 300,
				slidesToShow: 3,
				adaptiveHeight: false,
				arrows: false,
        };
      return (
            <section id="our__testimonials">
            <div className="testimonial__carousel">
            <div className="container">
          <Slider {...settings}>
          <div className = "">
            <div className="testimonial__wrapper">
							<div className="testimonial__image">
								<img src={illya} alt=""/>
							</div>
							<div className="testimonial__heading">
								<h5>Илья Трикси, <span>Киев</span></h5>
							</div>

							<div className="testimonial__description">
								<p>Из личного опыта скажу, что компания Alex Credit реально выручает, когда срочно нужны деньги, а до зарплаты
									еще далеко. Сайт очень простой и удобный в использовании. Через 10 мин. после подачи заявки деньги уже были у
									меня на карточке. Процент и сроки кредитования вполне приемлемы, документов и сведений при оформлении минимум.
									Быстро и удобно.</p>
							</div>
						</div>
						</div>
						<div className = "">
            <div className="testimonial__wrapper">
							<div className="testimonial__image">
								<img src={svetlana} alt="" />
							</div>
							<div className="testimonial__heading">
								<h5>Светлана Волкова, <span>Одесса</span></h5>
							</div>

							<div className="testimonial__description">
								<p>Alex Credit – это быстро, надежно, профессионально! Рекомендую!
								</p>
							</div>
						</div>
						</div>

					<div className = "">
            <div className="testimonial__wrapper">
							<div className="testimonial__image">
								<img src={tatiana} alt=""/>
							</div>
							<div className="testimonial__heading">
								<h5>Татьяна Пономаренко, <span>Львов</span></h5>
							</div>

							<div className="testimonial__description">
								<p>Спасибо сотрудникам компании за надежность и практичность в получении кредита. Хорошие условия для клиентов
									и отличная команда. Терпения вам, ребята! Побольше честных заемщиков.
								</p>
							</div>
						</div>
						</div>

					<div className = "">
            <div className="testimonial__wrapper">
							<div className="testimonial__image">
								<img src={sergey} alt=""/>
							</div>
							<div className="testimonial__heading">
								<h5>Сергей Керимов, <span>Запорожье</span></h5>
							</div>

							<div className="testimonial__description">
								<p>Кредит, который очень легко и удобно оформить в любое время и в любом месте на карту. А чтобы вернуть,
									просто нажимаешь кнопку «Оплатить» - и все! Кстати, проценты здесь самые низкие. Спасибо.
								</p>
							</div>
						</div>
						</div>
                        </Slider>
                        </div>
            </div>
        </section>
      );
    }
  }

