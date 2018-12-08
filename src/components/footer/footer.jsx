import React from 'react';

const Footer = () => (
    <footer>
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
						<div className="footer__contacts">
							<h5>Контакты</h5>
							<div className="footer__contacts-numbers">
								<div className="phone"><i className="fas fa-phone"></i></div>
								<div className="numbers__left">
									<a href="+38 044 389 33 03">+38 044 389 33 03;</a><br/>
									<a href="+38 099 618 64 64">+38 099 618 64 64;</a>
								</div>
								<div className="numbers__right">
										<a href="+38 044 389 33 03">+38 044 389 33 03;</a><br/>
										<a href="+38 099 618 64 64">+38 099 618 64 64;</a>
								</div>
							</div>
							<div className="footer__contacts-email">
									<div className="phone"><i className="fas fa-envelope"></i></div>
									<a href="">mail@alexcredit.com.ua</a>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
							
						<div className="footer__heading">
								<h5>Мы в соц.сетях</h5>
						</div>
						<div className="footer__socials">
								<a href=""><i className="fab fa-youtube"></i></a>
								<a href=""><i className="fab fa-instagram"></i></a>
								<a href=""><i className="fab fa-facebook-f"></i></a>
								<a href=""><i className="fab fa-twitter"></i></a>
						</div>
						<div className="footer__copyright">
							<p>© AlexCredit, 2017 — 2018</p>
						</div>
					</div>
				</div>
			</div>
	</footer>
);

export default Footer;