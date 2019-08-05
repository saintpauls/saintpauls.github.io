
 

 	$(document).ready(function() {
				function onHash() {
					if(!window.location.hash) {
						return;
					}
					var name = window.location.hash.substr(1),
							el = document.getElementById('vitral-' + name);
				
					if(el) {					
						// remove current page's class
						document.getElementsByClassName('page-active')[0].className = 'page';
						// add new page's class
						el.className = ' page-active';
					}
				};
			
				window.onhashchange = onHash;
				onHash();
			});
