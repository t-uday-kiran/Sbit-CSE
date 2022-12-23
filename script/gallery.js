$('.gallery-page').slick({
	  infinite: true,
	  slidesToScroll: 1,
	  rows: 4,
	  slidesPerRow: 3,
	  dots: true,
	  customPaging : function(slider, i) {
	  var thumb = $(slider.$slides[i]).data();
	  return '<a>'+(i+1)+'</a>';
	     },
  arrows: true,
  prevArrow: '<button type="button" id="prev" class="slick-prev fa fa-arrow-left" aria-hidden="true"></button>',
  nextArrow: '<button type="button" id="next" class="slick-next fa fa-arrow-right" aria-hidden="true"></button>'
});

var filtered = false;
var img = "img";

$('.filter-all').click(function(e) {
  $('.gallery-page')[0].slick.refresh();
  filtered = false;
});

$('.filter-res').click(function(e) {
  
  $('.gallery-page')[0].slick.refresh();
  
  if ($("img").not("[alt='reisential']")){
       $("img").not("[alt='residential']").parent().css({'display' :'none','width':'0px'}).parent().css('float', 'left');
     $("img[alt='residential']").parent().css('width' , '370px').parent().parent().css('float' , 'left');
     
       filtered = true;
}else{
       $("img").not("[alt='residential']").parent().css({'display' :'block','width':'100%'}).parent().css('float', 'none');
     $("img[alt='residential']").parent().removeAttr('style');
  
       filtered = false;
}
});

$('.filter-com').click(function(e) {
  
  $('.gallery-page')[0].slick.refresh();
  
  if ($("img").not("[alt='commercial']")){
       $("img").not("[alt='commercial']").parent().css({'display' :'none','width':'0px'}).parent().css('float', 'left');
     $("img[alt='commercial']").parent().css('width' , '370px').parent().parent().css('float' , 'left');
     
       filtered = true;
}else{
       $("img").not("[alt='commercial']").parent().css({'display' :'block','width':'100%'}).parent().css('float', 'none');
     $("img[alt='commercial']").parent().removeAttr('style');  
       filtered = false;
}
});
$('.filter-agr').click(function(e) {
  
  $('.gallery-page')[0].slick.refresh();
  
   if ($("img").not("[alt='agricultural']")){
       $("img").not("[alt='agricultural']").parent().css({'display' :'none','width':'0px'}).parent().css('float', 'left');
     $("img[alt='agricultural']").parent().css('width' , '370px').parent().parent().css('float' , 'left');
     
       filtered = true;
}else{
       $("img").not("[alt='agricultural']").parent().css({'display' :'block','width':'100%'}).parent().css('float', 'none');
     $("img[alt='agricultural']").parent().removeAttr('style');  
       filtered = false;
}
});

$(".filters a").on('click',function(){
  
  $("a").removeClass("active-filter");
  $(this).addClass("active-filter");
  
});