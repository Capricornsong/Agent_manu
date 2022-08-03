/*
 * @Author: Liusong He
 * @Date: 2022-07-19 11:59:02
 * @LastEditTime: 2022-07-29 18:11:16
 * @FilePath: \Agent_manu\background.js
 * @Email: lh2u21@soton.ac.uk
 * @Description: 
 */
let color = "#3aa757"

chrome.runtime.onInstalled.addListener(() => {
    // chrome.storage.sync.set({ color })
    console.log('installed!')
})

chrome.tabs.onUpdated.addListener((tabId, tab) => {
    console.log(tab.url)
    if (tab.url && tab.url.includes("google.com/search")) {
        // const queryParameters = tab.url.split("?")[1]
        // const urlParameters = new URLSearchParams(queryParameters)
        // console.log(urlParameters)
        console.log("onUpdated-google")
        chrome.tabs.sendMessage(tabId, { type: "Google" })
    }
    else if (tab.url) {
        console.log("onUpdated-Other")
        chrome.tabs.sendMessage(tabId, { type: "Other" })
    }
})