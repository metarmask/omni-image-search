var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-33927864-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

chrome.omnibox.onInputEntered.addListener(function(text) {
  chrome.tabs.update({
    url: 'https://www.google.com.hk/search?tbm=isch&q=' + text
  });
  _gaq.push(['_trackEvent', 'Image', 'search', 'Google']);
});
