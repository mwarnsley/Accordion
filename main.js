$(document).ready(function(){
	(function(){
	  var content = $("p").hide();
	  $("h1").on("click", function(){
	    var $that = $(this);
	    $that.each(function(){
	    var that2 = $that.next();
	    $("p").not(that2).hide();
	    that2.slideToggle();
	    });
	  });
	})();
});