$.fn.extend({
	rickRoll: function(){
		var $links = $(this);
		if ($links.length) {
			var rn = Math.floor(Math.random() * $links.length);
			$rrl = (!$.browser.msie) ? $($links[rn]) : $links;
			$rrl.bind("click", function(e) {
				e.preventDefault();
				// never gonna give. you. up...
				window.location = 'http://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1';
			})
		}
	}
})
