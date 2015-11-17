chrome.omnibox.onInputEntered.addListener(function(text) {
  chrome.tabs.update({
    url: 'https://www.google.com/search?tbm=isch&q=' + text
  });
});
