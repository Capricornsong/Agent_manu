/*
 * @Author: Liusong He
 * @Date: 2022-07-19 11:59:02
 * @LastEditTime: 2022-08-07 15:28:54
 * @FilePath: \Agent_manu\background.js
 * @Email: lh2u21@soton.ac.uk
 * @Description: 
 */

let userInformation
//chrome
chrome.runtime.onInstalled.addListener(() => {
    console.log('installed!')
    chrome.tabs.create({
        url: 'options.html'
    })
    chrome.storage.sync.get('level', ({ level }) => {
        let any1, any2, any3, any4, any5, any6, any7, any8, any9, any10, any11, any12
        console.log('already get level when install')
        if (level && level == 2) {
            // category = level
            // chrome.runtime.sendMessage({ isExist: "YES-2" })
            chrome.storage.sync.get(['an1', 'an2', 'an3', 'an4', 'an5', 'an6', 'an7', 'an8', 'an9', 'an10', 'an11', 'an12'], ({ an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12 }) => {
                any1 = an1
                any2 = an2
                any3 = an3
                any4 = an4
                any5 = an5
                any6 = an6
                any7 = an7
                any8 = an8
                any9 = an9
                any10 = an10
                any11 = an11
                any12 = an12
                console.log('an12: ' + an12)
                prepareUserInfo(any1, any2, any3, any4, any5, any6, any7, any8, any9, any10, any11, any12)
            })

        }
        else if (level) {
            // category = level
            // chrome.runtime.sendMessage({ isExist: "YES" })
            var obj = new Object()
            obj.level = "2"
            fetch('http://localhost:3000/level', {
                method: 'post',
                headers: {
                    'Accept': 'application/json,*.*',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: jsonString
            })
        }
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
//get user info (if there is)
chrome.identity.getProfileUserInfo(function (userInfo) {
    userInformation = userInfo
    console.log(userInformation)
})

function prepareUserInfo(an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12) {
    var obj = new Object()
    var addiInfo = new Object()
    var userInfo = userInformation
    obj.level = "2"
    addiInfo.storageOrAccessInfo = an1
    addiInfo.geolocation = an2
    addiInfo.basicAds = an3
    addiInfo.createAdsProfile = an4
    addiInfo.selectAdsProfile = an5
    addiInfo.createContentProfile = an6
    addiInfo.seleteContentProfile = an7
    addiInfo.audienceSight = an8
    addiInfo.measureAdsPerformance = an9
    addiInfo.measureContentPerformance = an10
    addiInfo.improveProducts = an11
    addiInfo.activelyScan = an12
    obj.addiInfo = addiInfo
    obj.userInfo = userInfo
    var jsonString = JSON.stringify(obj)
    console.log(jsonString)
    fetch('http://localhost:3000/level', {
        method: 'post',
        headers: {
            'Accept': 'application/json,*.*',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: jsonString
    })
}


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
