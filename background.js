chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "https://github.com/";
  chrome.tabs.create({ url: newURL });
});