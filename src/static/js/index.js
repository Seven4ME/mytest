$( document ).ready(function() {
function update() {            
     $interest = 0.15 ;
     $perday = 15 ;
     $amount1 = $("#amount").val();
     $dayscount = parseInt(1);
     $dayscount = $("#days").val();
     $amount2 = parseInt($amount1) + $interest * parseInt($amount1) + (parseInt($dayscount) * ($perday/100));
     $apr = (($amount2-$amount1 / $amount1 ) / ((parseInt($dayscount)/365) * 10000))  ;
     $("#amount2").val($amount2);
     $("#amount3").val(parseFloat($amount2-$amount1).toFixed(2));
     $("#amount4").val($apr);
}
 
 
$("#slider1").slider({
    value:150,
    max:10000,
    min:100,
    step:50,
    slide: function(event, ui) {
        $("#amount").val(ui.value);
        $("#amount").html(ui.value);
                update();       
        $(ui.handle).find('.ui-tooltip-ammount').html(ui.value);
    },
    create: function(event, ui) {
        var tooltip = $('<div class="ui-tooltip" />');
        $(event.target).find('.ui-slider-handle').append("<span class='ui-tooltip-ammount'></span>",ui.value);
        $('#slider1').find('.ui-tooltip-ammount').html('150');
        $('.credit').find('#amount').html('150'); 
      },
      change: function(event, ui) {
                $('#hidden').attr('value', ui.value);
                }
});

 function fillOrange() {
      var orange = $( "#slider1" ).slider( "value" );
    }
    $( "#slider1" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 10000,
      step: 50,
    });
    $( "#slider1" ).slider( "value", 255 );

   
function addDaysToDate(days) {
  var mths = new Array("Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec");
 
  var d = new Date();
  d.setHours(d.getHours() + (24 * days));
 
  var currD = d.getDate();
  var currM = d.getMonth();
  var currY = d.getFullYear();
 
  return mths[currM] + " " + currD + ", " + currY;
}
 
 

$("#slider2").slider({
    max:30,
    min:1,
    step: 1,
    value: 1,
    create: function(event, ui) {
      $("#date").text(addDaysToDate(parseInt($("#days").val())));
      $(event.target).find('.ui-slider-handle').append("<span class='ui-tooltip-days'></span>",ui.value);
      $('#slider2').find('.ui-tooltip-days').html('1');
      $('.credit').find('#days').html('1'); 
    },
    slide: function(event, ui) {  
        $("#days").val(ui.value) ;
        $("#date").text(addDaysToDate(parseInt($("#days").val())));
                update();
        $(ui.handle).find('.ui-tooltip-days').html(ui.value);
    },
    
    change: function(event, ui) {
        $('#hidden').attr('value', ui.value);
    }
});
$("#days").val($("#slider2").slider("value"));
 
$("#days").change(function(event) {
  var data = $("#days").val();
  if (data.length > 0)
  {
     if (parseInt(data) >= 0 && parseInt(data) <= 31)
    {
        $("#slider2").slider("option", "value", data);
     }
     else
     {
        if (parseInt(data) < 1)
       {
           $("#days").val("1");
           $("#slider2").slider("option", "value", "1");
       }
       if (parseInt(data) > 31)
        {
            $("#days").val("31");
            $("#slider2").slider("option", "value", "31");
        }
     }
  }
  else
  {
    $("#slider2").slider("option", "value", "1");
  }
  $("#date").text(addDaysToDate(parseInt($("#days").val())));
});


    function fillGreen() {
        var green = $( "#slider2" ).slider( "value" );
    }

    $( "#slider2" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 30,
        step: 1
    });
    $( "#slider2" ).slider( "value", 1 );


update();
});