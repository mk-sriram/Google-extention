var rules_no = 1;
        let rules = [{
                "id": 1,
                "priority": 1,
                "action": { "type": "block" },
                "condition": { "urlFilter": "*://*doubleclick.net/*" }
            }]
        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("blockButton").addEventListener("click", updateRules);
        });

    function updateRules() {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
            let url = tabs[0].url;
            
            // Here, you should call a function to update the Rules.json file.
            // This could be done using Chrome Extension APIs or a backend service.
            // For demonstration purposes, I'll provide a mock example:
            
            let newRule = {
                "id": 3,
                "priority": 1,
                "action": { "type": "block" },
                "condition": { "urlFilter": url }
            };
            
            // Assuming you have a function to update the rules and save them:
            updateAndSaveRules(newRule);
        });   
    }
    function updateAndSaveRules(newRule){
        rules.push(newRule);
        rules_no++;

        console.log("updated rules and rules_no");

    }