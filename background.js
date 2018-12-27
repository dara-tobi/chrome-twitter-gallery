// Twitter Gallery
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

  if (changeInfo.url) {
    chrome.tabs.sendMessage(tabId, {
      message: 'twitterUrlChanged',
      url: changeInfo.url
    });
  }
});

