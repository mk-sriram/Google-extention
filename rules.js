
chrome.webRequest.onBeforeRequest.addListener(
	
    function(details) { 
		return { cancel: true }},
	chrome.storage.local.get({ rules: [] }, result => {
			let rules = result.rules;
		})),
    { urls: rules },
    ["blocking"]
