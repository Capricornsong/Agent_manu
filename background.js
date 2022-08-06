/*
 * @Author: Liusong He
 * @Date: 2022-07-19 11:59:02
 * @LastEditTime: 2022-08-06 15:02:45
 * @FilePath: \Agent_manu\background.js
 * @Email: lh2u21@soton.ac.uk
 * @Description: 
 */


//chrome
chrome.runtime.onInstalled.addListener(() => {
    console.log('installed!')
    chrome.tabs.create({
        url: 'options.html'
    })
})
// chrome.scripting.executeScript({
//     target: { tabId: tabId },
//     files: ['server.js']
// })
// chrome.webNavigation.onCampleted.addListener()

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // console.log(tab.url)
    // console.log('tabid: ' + tabId)
    // console.log(changeInfo.status)

    if (changeInfo.status === 'complete')
        if (changeInfo.status === 'complete' && tab.url && tab.url.includes("google.com/search")) {
            // const queryParameters = tab.url.split("?")[1]
            // const urlParameters = new URLSearchParams(queryParameters)
            // console.log(urlParameters)
            console.log("onUpdated-google")
            chrome.tabs.sendMessage(tabId, { type: "Google" })

        }
        else if (tab.url && changeInfo.status === 'complete') {
            console.log("onUpdated-Other")
            chrome.tabs.sendMessage(tabId, { type: "Other" })
        }
})

// chrome.runtime.onMessage.addListener((obj, sender, response) => {
//     console.log("onMessage obj" + obj)
//     const { type, value } = obj
//     console.log("type:" + type)
//     // toasts.show()
//     // t.show()
//     // bsAlert.show()
//     if (type === 'Google') {
//         googleBan()
//     }
//     else if (type === 'Other') {
//         other()
//     }
// })
