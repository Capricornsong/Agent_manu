/*
 * @Author: Liusong He
 * @Date: 2022-07-19 11:59:02
 * @LastEditTime: 2022-08-04 18:28:39
 * @FilePath: \Agent_manu\background.js
 * @Email: lh2u21@soton.ac.uk
 * @Description: 
 */
let color = "#3aa757"

chrome.runtime.onInstalled.addListener(() => {
    // chrome.storage.sync.set({ color })
    console.log('installed!')
    chrome.tabs.create({
        url: 'options.html'
    })
})


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
