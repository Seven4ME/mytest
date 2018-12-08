import React from 'react';
import monitor from '../../static/img/monitor.png';
import terminal from '../../static/img/terminal.png';
import privatbank from '../../static/img/privatbank.png';
import ukrsib from '../../static/img/ukrsib.png';
import unicredit from '../../static/img/unicredit.png';
import alfabank from '../../static/img/Alfa.png';

const Repayment = () => (
    <div id="repayment">
			<div className="repayment__wrapper">
				<div className="container">
					<div className="repayment__heading">
						<h3>Способы погашения <span>кредита</span></h3>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-6">
									<div className="left__monitor">
										<img src={monitor} alt=""/>
									</div>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-6">
									<div className="left__description">
										<h5>В личном кабинете AlexCredit</h5>
										<p>Вы можете погасить кредит Ваш кредит онлайн не выходя из дома. Просто перейдите в личный кабинет и
											оплатите займ банковской картой</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-12 col-lg-6 col-xl-6">
							<div className="row flex-end flex-center">
								<div className="col-md-6">
									<div className="right__monitor">
										<img src={terminal} alt=""/>

									</div>
								</div>
								<div className="col-md-12 col-lg-10 col-xl-6">
									<div className="right__description">
										<h5>Через платежные<br/> терминалы</h5>
										<p>Оплата кредита в терминале Ibox, EasyPay и City24 - это быстро и удобно. Терминал Вы сможете найти в
											ближайшем к Вам супермаркете.</p>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div className="repayment__partners-wrapper">
					<h4>В кассе банков партнеров</h4>
					<div className="repayment__partners">

						<div className="container">
							<ul>
								<li><img src={privatbank} alt=""/></li>
								<li><img src={ukrsib} alt=""/></li>
								<li><img src={unicredit} alt=""/></li>
								<li><img src={alfabank} alt=""/></li>
							</ul>
						</div>


					</div>
				</div>



			</div>
		</div>
);

export default Repayment;