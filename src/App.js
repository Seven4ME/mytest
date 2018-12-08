import React, { Component } from 'react';
import logo from './static/img/logo-alex.png'
import './App.css';
import './static/css/main.min.css';
import './static/libs/fontawesome/webfonts/fa-brands-400.eot';
import Calculator from './components/calculator/calculator.jsx';
import Switcher from './components/langSwitcher/switcher.jsx';
import Features from './components/ourFeatures/features.jsx';
import Howitworks from './components/howitworks/howitworks.jsx'
import Takeloan from './components/takeloan/takeloan.jsx';
import Loyalty from './components/loyalty/loyalty.jsx'
import MultipleItems from './components/testimonials/testimonials.jsx';
import Description from './components/description/description.jsx';
import Repayment from './components/repayment/repayment.jsx';
import About from './components/about/about.jsx';
import Footer from './components/footer/footer.jsx';


import './static/libs/slick/slick.css';


 
// To include the default styles
import 'react-rangeslider/lib/index.css'



class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header>
          <div className="top-nav">
            <div className="container">

              <div className="row middle-md between-md">
                <div className="col-xs-7 col-sm-7 col-md-2 col-lg-2 col-xl-2">
                  <div className="logo">
                    <img src = {logo} alt=""/>
                  </div>
                </div>

                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                  <Switcher/>
                </div>

              </div>

            </div>

          </div>

          <div className="mobile">
            <div className="container">
              <div className="row end-xs end-sm end-md">
                <div className="col-lg-12">
                  <div className="button_container" id="toggle"></div>

                </div>
              </div>
            </div>
          </div>
		</header>
    
      <Calculator/>
      <Features/>
      <Howitworks/>
      <Takeloan/>
      <Loyalty/>
      <MultipleItems/>
      <Description/>
      <Repayment/>
      <About/>
      <Footer/>

      </div>
    );
  }
}


export default App;
