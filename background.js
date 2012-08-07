chrome.omnibox.onInputEntered.addListener(function(text) {
  chrome.tabs.update({
    url: 'https://www.google.com.hk/search?tbm=isch&q=' + text
  });

  // chrome.tabs.getCurrent(function (tab) {
    // console.log(tab);
    // chrome.tabs.update(tab.id, {
    //   url: 'https://www.google.com.hk/search?tbm=isch&q=' + text
    // });
  // })
});
