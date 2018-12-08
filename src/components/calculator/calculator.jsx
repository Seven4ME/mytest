import React, {Component} from 'react';
import Slider from 'react-rangeslider';


class AmmountSlider extends Component {
	constructor(props, context) {
	  super(props, context)
	  this.state = {
		volume: 0
	  }
	}
	handleChange = (value) => {
	  this.setState({
		volume: value
	  })
	  let money = document.getElementById('money');
	  let moneyConclusion = document.getElementById('rangeValue');
	  money.innerHTML = value + ' грн.';
	  moneyConclusion.innerHTML = value + ' грн';
	}


   
	render() {
	  let { volume } = this.state
	  return (
		<Slider
		  min = {100}
		  max = {3500}
		  step = {50}
		  value = {volume}
		  tooltip = {false}
		  orientation= "horizontal"
		  onChange= {this.handleChange}
		/>
	  )
	}
  }
  

  class DaysSlider extends Component {
	constructor(props, context) {
	  super(props, context)
	  this.state = {
		volume: 0
	  }
	}
   
	handleChange = (value) => {
	  this.setState({
		volume: value
	  })
	  let days = document.getElementById('days');
	  days.innerHTML = value + ' дн.';

	}
   
	render() {
	  let { volume } = this.state
	  return (
		<Slider
		  min = {1}
		  max = {30}
		  step = {1}
		  value= {volume}
		  tooltip = {false}
		  orientation= "horizontal"
		  onChange= {this.handleChange}
		/>
	  )
	}
  }



const Calculator = () => (
	
	<div>
            <section id="banner">
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 ">
					<div className="banner__wrapper">
						<div className="container">
							<div className="banner__heading">
								<h1>
									Получите до 3000 грн со 100% * скидкой на свой первый кредит!
								</h1>
							</div>
							<div className="banner__calc">
								<div className="row center-md">
									<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
										<div className="calculator__left">
											<div className="calculator__left-heading">
												<span>Получить кредит за 10 минут!</span>
											</div>
											<div className="calculator__left-wrapper">
												<div className="loan__ammount">
													<div className="ammount__values">
															<p>Сумма</p>
															
															<span id="money">2150 грн.</span>
													</div>
													<div className="ammount__container">
														<AmmountSlider/>
													</div>
												</div>
												<div className="term">
													<div className="term__days">
														<div className="days__value">
																<p>Срок</p>
																<span id="days">14 дн.</span>
														</div>
														
														<div className="days__container">
														<DaysSlider/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
										<div className="calculator__right">
											<div className="calculator__right-heading">
												<span>Общая сумма к оплате</span>
											</div>
											<div className="total">
												<div className="total__wrapper">
													<table>
														<tbody>
															<tr>
																<td>Кредит:</td>
																<td className="credit">
																	<div id="rangeValue">0</div>
																</td>
															</tr>
															<tr>
																<td>Проценты:</td>
																<td className="credit" id="percentage">
																	2
																</td>
															</tr>
															<tr>
																<td>Всего:</td>
																<td className="credit" id="fullCredit">
																	2

																</td>
															</tr>
															<tr>
																<td>Дата погашения:</td>
																<td className="credit" id="dateEnd">
																	2
																</td>
															</tr>
														</tbody>
													</table>

												</div>
												<a className="total__button" href="#">
													Подать заявку
												</a>
												<div className="round">
													<input type="checkbox" id="checkbox" />
													<label htmlFor="checkbox"></label>
													<p className="check_deskription">Я новый клиент</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
		</div>
);

            


export default Calculator;