import React from 'react';
import first from '../../static/img/fill_app.png';
import second from '../../static/img/Chat.png';
import third from '../../static/img/recievemoney.png'

const Howitworks = () =>(
    <section id="howitworks">
			<div className="howitworks__wrapper">
				<div className="container">
					<div className="howitworks__heading">
						<h2>Как это <span>работает</span></h2>
					</div>
					<div className="row">
						<div className="col-md-12 col-lg-4 col-xl-4">
							<div className="algorithm__wrapper-first">
								<div className="algorithm__image">
									<img src={first} alt=""/>
								</div>
								<div className="algorithm__step"></div>
								<div className="algorithm__heading">
									<h3>Подайте заявку</h3>
								</div>
								<div className="algorithm__description">
									<p>Подайте заявку онлайн — это займет всего несколько минут.</p>
								</div>

							</div>
						</div>


						<div className="col-md-12 col-lg-4 col-xl-4">
							<div className="algorithm__wrapper-second">
								<div className="algorithm__image">
									<img src={second} alt=""/>
								</div>
								<div className="algorithm__step"></div>
								<div className="algorithm__heading">
									<h3>Дождитесь решения</h3>
								</div>
								<div className="algorithm__description">
									<p>Получите подтверждение. Решение о выдаче кредита будет принято сразу же после заполнения вами заявки.</p>
								</div>

							</div>
						</div>
						<div className="col-md-12 col-lg-4 col-xl-4">
							<div className="algorithm__wrapper-third">
								<div className="algorithm__image">
									<img src={third} alt=""/>
								</div>
								<div className="algorithm__step"></div>
								<div className="algorithm__heading">
									<h3>Получите деньги</h3>
								</div>
								<div className="algorithm__description">
									<p>Средства поступят на вашу карту в течение нескольких минут после обработки заявки.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
);

export default Howitworks;