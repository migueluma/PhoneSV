$(document).ready(function() {
    $('.btn-mobile').on('click', function(){
    	var menu=$('.navigation-list');
    	if(menu.hasClass('navigation-list-show')){
    		menu.removeClass('navigation-list-show');
    	}else{
    		menu.addClass('navigation-list-show');
    	}
    });
});

if ('serviceWorker' in navigator) {
  console.log('Service Worker Supporteed')
  navigator.serviceWorker
    .register('./sw.js', { scope: './' })
    .then(function(registration) {
      console.log("Service Worker Registered");
    })
    .catch(function(err) {
      console.log("Service Worker Failed to Register", err);
    })

} else{

  console.log('Service Worker not supported');
}
