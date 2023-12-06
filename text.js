wow = new WOW({
	animateClass: 'animated',
	offset: 100,
	callback: function(box) {
		//console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
});
wow.init();
(function($){
	"use strict";
	$(document).ready(function(){
		if($.fn.tinymce){
			$('body [data-type=Editor]').tinymce({
				theme: 'modern',
				plugins:[
					'advlist autolink lists link image charmap print preview anchor textcolor',
					'searchreplace visualblocks code fullscreen',
					'insertdatetime media table contextmenu paste code spellchecker'
				],
				toolbar : 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | fontsizeselect | forecolor backcolor',
				//spellchecker_rpc_url: 'spellchecker.php',
				language : 'en'
			});
		}
		if($.fn.datepicker){
			$('[data-type=DatePicker]').datepicker({
				format: 'yyyy-mm-dd',
				autoclose: true,
				todayBtn: true,
				todayHighlight : true,
				todayBtn: 'linked',
				weekStart: 1
			});
		}

		jQuery('nav#dropdown').meanmenu();
		$('.awesome-portfolio-content').mixItUp({
			animation: {
				effects: 'rotateZ',
				duration: 1000,
			}
		});
		$('.blog-column-content').mixItUp({
			animation: {
				effects: 'scale',
				duration: 1000,
			}
		});
		$('.portfolio-column-content').mixItUp({
			animation: {
				effects: 'fade rotateY(-180deg)',
				duration: 1000,
			}
		});

		$('.fancybox').fancybox();
		var s = $("#sticker");
		var pos = s.position();
		$(window).scroll(function() {
			var windowpos = $(window).scrollTop();
			if (windowpos > pos.top) {
			s.addClass("stick");
			$('.nstlogo').addClass('hidden');
			$('.stlogo').removeClass('hidden');
			} else {
				s.removeClass("stick");
				$('.stlogo').addClass('hidden');
				$('.nstlogo').removeClass('hidden');;
			}
		});
		if($.fn.owlCarousel){
			$('.owl-carousel').owlCarousel({
				animateOut: 'slideOutDown',
				animateIn: 'flipInX',
				margin:30,
				stagePadding:30,
				smartSpeed:450,
				autoplay:true,
				autoplayTimeout:1000,
				autoplayHoverPause:true,
				responsiveClass:true,
				responsive:{
					0:{
						items:1,
						nav:false
					},
					600:{
						items:2,
						nav:false
					},
					1000:{
						items:3,
						nav:false,
						loop:true
					}
				}
			});
			$('.testimonial-curosel').owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				animateOut: 'slideOutDown',
				animateIn: 'zoomInLeft',
				autoplay:false,
				smartSpeed:3000,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			$('.device-curosel').owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				autoplay:false,
				smartSpeed:1000,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			$('.macbook-list').owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				autoplay:false,
				smartSpeed:1000,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			$('.brand-curosel-3').owlCarousel({
				loop:true,
				margin:0,
				nav:false,
				autoplay:true,
				smartSpeed:1000,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:4
					}
				}
			});
			$('.upcoming-product-list').owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				autoplay:false,
				smartSpeed:1000,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:4
					},
					1000:{
						items:6
					}
				}
			});
			$('.office-banner').owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				animateIn: 'fadeIn',
				autoplay:false,
				smartSpeed:3000,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			$('.team-2-curosel').owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				autoplay:false,
				stagePadding: 50,
				smartSpeed:1000,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				responsive:{
					0:{
						items:1
					},
					770:{
						items:3
					},
					1000:{
						items:5
					}
				}
			});
			$('.testimonial-list').owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				animateOut: 'slideOutDown',
				animateIn: 'flipInX',
				autoplay:true,
				smartSpeed:1000,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
		}
	});
	if($.fn.counterUp){
		$('.counter').counterUp({
			delay: 50,
			time: 3000
		});
		$('.team-counter').counterUp({
			delay: 50,
			time: 3000
		});
		$('.team-3-couter').counterUp({
			delay: 50,
			time: 3000
		});
	}
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
	$(".qa-accordion").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }
	});

/* --------------------------------------------------------
   contact-accordion
* -------------------------------------------------------*/
	$(".contact-accordion").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }
	});

/* --------------------------------------------------------
   faq-accordion
* -------------------------------------------------------*/
	$(".faq-accordion").collapse({
		accordion:true,
	  open: function() {
		this.slideDown(550);
	  },
	  close: function() {
		this.slideUp(550);
	  }
	});

/*---------------------
   Circular Bars - Knob
--------------------- */
	  if(typeof($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		  var $this = $(this),
			  knobVal = $this.attr('data-rel');

		  $this.knob({
			'draw' : function () {
			  $(this.i).val(this.cv + '%')
			}
		  });

		  $this.appear(function() {
			$({
			  value: 0
			}).animate({
			  value: knobVal
			}, {
			  duration : 2000,
			  easing   : 'swing',
			  step     : function () {
				$this.val(Math.ceil(this.value)).trigger('change');
			  }
			});
		  }, {accX: 0, accY: -150});
		});
	  }

/*---------------------
 countdown
--------------------- */
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
	  });
	});
})(jQuery);