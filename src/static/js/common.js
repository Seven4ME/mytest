/* Custom JS */
   $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

	$('.about_mobile').on('click',function(e){
	 $(this).toggleClass('js-active');
	});


	$('.how_mobile').on('click',function(e){
	 $(this).toggleClass('js-active-how');
	});

	