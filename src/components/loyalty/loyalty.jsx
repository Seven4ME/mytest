import React, {Component} from 'react';
import Slider from "react-slick";
import begginer from '../../static/img/coins/begginer.png';
import begginerMoney from '../../static/img/coins/begginer__money.png';
import bronze from '../../static/img/coins/bronze.png';
import bronzeMoney from '../../static/img/coins/bronze__money.png';
import silver from '../../static/img/coins/silver.png';
import silverMoney from '../../static/img/coins/silver__money.png';
import gold from '../../static/img/coins/gold.png';
import goldMoney from '../../static/img/coins/gold__money.png';
import platinum from '../../static/img/coins/platinum.png';
import platinumMoney from '../../static/img/coins/platinum__money.png';
import diamond from '../../static/img/coins/diamond.png';
import diamondMoney from '../../static/img/coins/diamond__money.png';
/*import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }
  */

  const Loyalty = () => (
    <section id="loyalty">
			<div className="loyalty__wrapper">
				<div className="container">
					<div className="loyalty__heading">
						<h2>Программа <span>лояльности</span></h2>
					</div>
					<div className="cards__carousel">
						<div className="">
							<div className="loyalty__card">
								<div className="loyalty__card-heading">
									<h4>Начальный</h4>
								</div>
								<div className="loyalty__card-coin"><img src = {begginer} alt=""/></div>
								<div className="loyalty__card-money"><img src="img/coins/begginer__money.png" alt=""/></div>
								<div className="loyalty__card-description"><i>30 дней</i><br/><i>3500 грн</i><br/><i>10% скидка</i></div>
							</div>
						</div>
						<div className="">
							<div className="loyalty__card">
								<div className="loyalty__card-heading">
									<h4>Бронзовый</h4>
								</div>
								<div className="loyalty__card-coin"><img src="img/coins/bronze.png" alt=""/></div>
								<div className="loyalty__card-money"><img src="img/coins/bronze__money.png" alt=""/></div>
								<div className="loyalty__card-description"><i>30 дней</i><br/><i>6000 грн</i><br/><i>15% скидка</i></div>
							</div>
						</div>
						<div className="">
							<div className="loyalty__card">
								<div className="loyalty__card-heading">
									<h4>Серебряный</h4>
								</div>
								<div className="loyalty__card-coin"><img src="img/coins/silver.png" alt=""/></div>
								<div className="loyalty__card-money"><img src="img/coins/silver__money.png" alt=""/></div>
								<div className="loyalty__card-description"><i>30 дней</i><br/><i>7000 грн</i><br/><i>20% скидка</i></div>
							</div>
						</div>
						<div className="">
							<div className="loyalty__card">
								<div className="loyalty__card-heading">
									<h4>Золотой</h4>
								</div>
								<div className="loyalty__card-coin"><img src="img/coins/gold.png" alt=""/></div>
								<div className="loyalty__card-money"><img src="img/coins/gold__money.png" alt=""/></div>
								<div className="loyalty__card-description"><i>30 дней</i><br/><i>8000 грн</i><br/><i>25% скидка</i></div>
							</div>
						</div>
						<div className="">
							<div className="loyalty__card">
								<div className="loyalty__card-heading">
									<h4>Платиновый</h4>
								</div>
								<div className="loyalty__card-coin"><img src="img/coins/platinum.png" alt=""/></div>
								<div className="loyalty__card-money"><img src="img/coins/platinum__money.png" alt=""/></div>
								<div className="loyalty__card-description"><i>30 дней</i><br/><i>9000 грн</i><br/><i>30% скидка</i></div>
							</div>
						</div>
						<div className="">
							<div className="loyalty__card">
								<div className="loyalty__card-heading">
									<h4>Бриллиантовый</h4>
								</div>
								<div className="loyalty__card-coin"><img src="img/coins/diamond.png" alt=""/></div>
								<div className="loyalty__card-money"><img src="img/coins/diamond__money.png" alt=""/></div>
								<div className="loyalty__card-description"><i>30 дней</i><br/><i>10000 грн</i><br/><i>40% скидка</i></div>
							</div>
						</div>
					</div>
					<div className="loyalty__card-wrapper">

						<div className="loyalty__card">
							<div className="loyalty__card-heading">
								<h4>Начальный</h4>
							</div>
							<div className="loyalty__card-coin"><img src = {begginer} alt=""/></div>
							<div className="loyalty__card-money"><img src = {begginerMoney} alt=""/></div>
							<div className="loyalty__card-description"><i>30 дней</i><br/><i>3500 грн</i><br/><i>10% скидка</i></div>
						</div>
						<div className="loyalty__card">
							<div className="loyalty__card-heading">
								<h4>Бронзовый</h4>
							</div>
							<div className="loyalty__card-coin"><img src = {bronze} alt=""/></div>
							<div className="loyalty__card-money"><img src = {bronzeMoney} alt=""/></div>
							<div className="loyalty__card-description"><i>30 дней</i><br/><i>6000 грн</i><br/><i>15% скидка</i></div>
						</div>

						<div className="loyalty__card">
							<div className="loyalty__card-heading">
								<h4>Серебряный</h4>
							</div>
							<div className="loyalty__card-coin"><img src= {silver} alt=""/></div>
							<div className="loyalty__card-money"><img src = {silverMoney}  alt=""/></div>
							<div className="loyalty__card-description"><i>30 дней</i><br/><i>7000 грн</i><br/><i>20% скидка</i></div>
						</div>
						<div className="loyalty__card">
							<div className="loyalty__card-heading">
								<h4>Золотой</h4>
							</div>
							<div className="loyalty__card-coin"><img src = {gold} alt=""/></div>
							<div className="loyalty__card-money"><img src = {goldMoney} alt=""/></div>
							<div className="loyalty__card-description"><i>30 дней</i><br/><i>8000 грн</i><br/><i>25% скидка</i></div>
						</div>
						<div className="loyalty__card">
							<div className="loyalty__card-heading">
								<h4>Платиновый</h4>
							</div>
							<div className="loyalty__card-coin"><img src = {platinum} alt=""/></div>
							<div className="loyalty__card-money"><img src = {platinumMoney} alt=""/></div>
							<div className="loyalty__card-description"><i>30 дней</i><br/><i>9000 грн</i><br/><i>30% скидка</i></div>
						</div>
						<div className="loyalty__card">
							<div className="loyalty__card-heading">
								<h4>Бриллиантовый</h4>
							</div>
							<div className="loyalty__card-coin"><img src = {diamond} alt=""/></div>
							<div className="loyalty__card-money"><img src = {diamondMoney} alt=""/></div>
							<div className="loyalty__card-description"><i>30 дней</i><br/><i>10000 грн</i><br/><i>40% скидка</i></div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );

  export default Loyalty;