$(document).ready(function() {
	//scroll to panel if hash tag is present
  /*if(location.hash != undefined && location.hash != ""){
    scrollToPanel(location.hash);
  }*/

	//when clicking nav buttons scroll to panel
  $('.page-anchor').click(function (e) {      
    scrollToPanel(this);

    var dropdown = $(this).parents(".collapse.in");
    if(dropdown.length > 0) {
      //close dropdown when one has been clicked
      var button = $('[data-target=#' + $(dropdown).attr("id") + "]");
      dropdown.collapse("toggle");
      button.addClass('collapsed');
    }

    //set focus to the elements scrolled to
    e.preventDefault();
  });
});

function scrollToPanel(element){
  var target;
  var height = 0;

  if(element && element.nodeType){
    target = $(element).data().target;
    if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && $(window).width() > 760) {
    	height += $(element).outerHeight();
    }
  }else{
    target = element;
  }

  //smoothly scroll to the panel associated with the button clicked
  $(target).animatescroll({
    padding: $("header").outerHeight() + height,
    easing:'easeInOutQuad',
    onScrollEnd: function(){
      if(history.pushState) {
        history.pushState(null, null, target);
      }
      else {
        location.hash = target;
      }
    }
  });
}