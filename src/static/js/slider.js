$(document).ready(function(){

    var valueBubble = '<output class="rangeslider__value-bubble" />';

    var moneyVal = 300,
        daysVal = 1,
        range         = $("#money_value"),
        range2        = $("#days_value"),

        outRangeValue = function (newMoneyValue) {
            $('#rangeValue').text(newMoneyValue + " грн.");
        },
        outMoney = function (newMoney){
            $('#money').text(newMoney + " грн.");
        },
        outDays = function (countDays){
            $('#days').text(countDays + " дн.");
        };
    

    function updateValueBubble(value, context) {
        outMoney(moneyVal);
        outRangeValue(moneyVal);
        doAll();
        value = value || context.value;
        var $valueBubble = $('#money', context.$range);
        
        if ($valueBubble.length) {
            $valueBubble[0].style.left = Math.ceil(position) + 'px';
            $valueBubble[0].innerHTML = value;
        }
    }

    function updateValueBubble2( value, context) {
        outDays(daysVal);
        doAll();
        value = value || context.value;
        var $valueBubble = $('#days', context.$range);

       

        if ($valueBubble.length) {
            $valueBubble[0].style.left = Math.ceil(position) + 'px';
            $valueBubble[0].innerHTML = value;
        }
    }

    $('#money_value').rangeslider({
        polyfill: false,
        onInit: function() {
            this.$range.append($(valueBubble));
            updateValueBubble( null, this);
        },
        onSlide: function(pos, value) {
            moneyVal = value;
            updateValueBubble( value, this);;
        }
    });

    $('#days_value').rangeslider({
        polyfill: false,
        onInit: function() {
            this.$range.append($(valueBubble));
            updateValueBubble( null, this);
        },
        onSlide: function(pos, value) {
            daysVal = value;
            updateValueBubble2( value, this);;
        }
    });

  

});


/* More JS */

var currentPercentage = 0.01 / 100 ; //проц по кредиту

var moneySlider = document.getElementById('money_value');
var daySlider = document.getElementById('days_value');

var returnDateElem = document.getElementById('dateEnd');
var creditPercentage = document.getElementById('percentage');
var fullCredit = document.getElementById('fullCredit');


function doAll(){
  calculatePercentage();
  displayDate();
}

function displayDate() {
    var returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + (+daySlider.value));
    var month = returnDate.getMonth() + 1;
    if(month < 10){
      month = '0' + month;
    }
    returnDateElem.innerHTML = returnDate.getDate()  + "/" + month + "/" + returnDate.getFullYear();
}

function calculateCredit(percentage) {
    fullCredit.innerHTML = (+moneySlider.value) + percentage + ' грн.';
}

function calculatePercentage() {
    var percentage = ((moneySlider.value * 10) * (daySlider.value * 10) * (currentPercentage * 10)) / 1000;
    creditPercentage.innerHTML = percentage + ' грн.';
    calculateCredit(percentage);
}


/* Custom JS */
    $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });


