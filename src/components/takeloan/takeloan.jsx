import React from 'react';
import bankcart from '../../static/img/bank__cart.png';
import years from '../../static/img/years.png';
import passport from '../../static/img/passport.png'
import smartphone from '../../static/img/smartphone.png';

const Takeloan = () => (
    <section id="takeloan">
			<div className="takeloan__wrapper">
				<div className="container">
					<div className="takeloan__heading">
						<h2>Что нужно для <span>получения кредита?</span></h2>
						<div className="row">
							<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
								<div className="takeloan__condition-wrapper">
									<div className="takeloan__condition-image">
										<img src = {bankcart} alt=""/>
									</div>
									<div className="takeloan__condition-description">
										<p>Банковская карта</p>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
								<div className="takeloan__condition-wrapper">
									<div className="takeloan__condition-image">
										<img src= {years} alt=""/>
									</div>
									<div className="takeloan__condition-description">
										<p>Возраст 18–70 лет</p>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
								<div className="takeloan__condition-wrapper">
									<div className="takeloan__condition-image">
										<img src= {passport} alt=""/>
									</div>
									<div className="takeloan__condition-description">
										<p>Паспорт и ИНН</p>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
								<div className="takeloan__condition-alternate ">
									<div className="takeloan__condition-image">
										<img src= {smartphone} alt=""/>
									</div>
									<div className="takeloan__condition-description">
										<p>Телефон и email</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
);

export default Takeloan;