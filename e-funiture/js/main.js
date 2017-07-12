$(document).ready(function(){
 $('.bxslider').bxSlider({
	mode: 'fade',
	controls: false,
	pager: false,
	auto:true
});

$('#upload').loadImg({
  "text"      : "Upload company logo",
  "fileExt"   : ["png","jpg"],
  "fileSize_min"  : 0,
  "fileSize_max"  : 2
});

$('#upload1').loadImg({
  "text"      : "Upload a product cover image",
  "fileExt"   : ["png","jpg"],
  "fileSize_min"  : 0,
  "fileSize_max"  : 2
});

$('#upload-add').loadImg({
  "text"      : "add",
  "fileExt"   : ["png","jpg"],
  "fileSize_min"  : 0,
  "fileSize_max"  : 2
});

$('#upload-add2').loadImg({
  "text"      : "add",
  "fileExt"   : ["png","jpg"],
  "fileSize_min"  : 0,
  "fileSize_max"  : 2
});

$('#upload-add3').loadImg({
  "text"      : "add",
  "fileExt"   : ["png","jpg"],
  "fileSize_min"  : 0,
  "fileSize_max"  : 2
});

$('#upload-add4').loadImg({
  "text"      : "add",
  "fileExt"   : ["png","jpg"],
  "fileSize_min"  : 0,
  "fileSize_max"  : 2
});

$('.slider-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-main',
  dots: false,
  arrows: true,
  focusOnSelect: true
}); 

$('.homecarousel').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed:2500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	
$('.autoslide1').slick({
	dots: false,
	infinite: true,
	arrows: true,
	speed:2500,
	slidesToShow: 6,
	slidesToScroll: 6,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.mostviewed').slick({
	dots: true,
	infinite: true,
	arrows: false,
	speed:2500,
	slidesToShow: 4,
	slidesToScroll: 4,
	autoplay: true,
	autoplaySpeed: 1500,
	responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});

$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});


$( document ).ready(function() {
  $('#date-from').datepicker({
    format: 'mm-dd-yyyy',
  });
  $('#date-to').datepicker();   
  
  $('.date-picker').datepicker().on('changeDate',function(e) {
  $('.date-picker').datepicker('hide');
  });
        

// disabling dates
var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

var checkin = $('#date-from').datepicker({
  onRender: function(date) {
  return date.valueOf() < now.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function(ev) {
  if (ev.date.valueOf() > checkout.date.valueOf()) {
  var newDate = new Date(ev.date)
  newDate.setDate(newDate.getDate() + 1);
  checkout.setValue(newDate);
  }
  checkin.hide();
  $('#date-to')[0].focus();
}).data('datepicker');
var checkout = $('#dpd2').datepicker({
  onRender: function(date) {
  return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function(ev) {
  checkout.hide();
}).data('datepicker');
});

