chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript(null, { file: "jquery-2.1.1.min.js" }, function() {
        chrome.tabs.executeScript(null, { file: 'fb_profile_pic.js' });
    });
});
