import React from 'react';

let defaultLanguage = 'RU';
let userLang = navigator.language || navigator.userLanguage;

console.log(userLang);

const Switcher = (props) =>{
    return(
        <div className="language__wrapper">
                    <input id="cmn-toggle-4" ng-model="langSet" value="0"  className="cmn-toggle cmn-toggle-round-flat ng-pristine ng-untouched ng-valid ng-empty"
                    type="checkbox" />
                    <label htmlFor="cmn-toggle-4"><span className="ruLang">{defaultLanguage}</span><span className="uaLang">{defaultLanguage}</span></label>
                    <a href="#" className="login"><i className="far fa-user"></i>Вход</a>
                  </div>
                  
    );                   
}

                    




export default Switcher;