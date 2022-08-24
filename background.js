/*
 * @Author: Liusong He
 * @Date: 2022-07-19 11:59:02
 * @LastEditTime: 2022-08-23 16:24:58
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
    chrome.storage.sync.get(['level', 'times'], ({ level, times }) => {
        let any1, any2, any3, any4, any5, any6, any7, any8, any9, any10, any11, any12, any13, any14, any15
        console.log('already get level when install')
        console.log('times: ' + times)
        //init the number of consenting to cloud
        if (times) {
            // chrome.runtime.sendMessage({ times: times })
            console.log('times got from cloud: ' + times)
        }
        else {
            var times = 0
            chrome.storage.sync.set({ times }, () => {
                console.log('times have been set to: ' + times)
            })
        }
        // if user had a persona in level 2(privacy pragmatism)
        if (level && level == 2) {
            chrome.storage.sync.get(['an1', 'an2', 'an3', 'an4', 'an5', 'an6', 'an7', 'an8', 'an9', 'an10', 'an11', 'an12', 'an13', 'an14', 'an15'], ({ an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15 }) => {
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
                any13 = an13
                any14 = an14
                any14 = an15
                console.log('an15: ' + an15)
                prepareUserInfo(any1, any2, any3, any4, any5, any6, any7, any8, any9, any10, any11, any12, any13, any14, any15)
            })
        }
        else if (level) {
            var obj = new Object()
            obj.level = "2"
            //post info to the internal server
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
// Listening for changes to the tab the user is on
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    if (changeInfo.status === 'complete') {
        if (changeInfo.status === 'complete' && tab.url && tab.url.includes("google.com/search")) {
            console.log("onUpdated-google")
            chrome.tabs.sendMessage(tabId, { type: "Google" })
        }
        else if (tab.url && changeInfo.status === 'complete') {
            console.log("onUpdated-Other")
            chrome.tabs.sendMessage(tabId, { type: "Other" })
        }
    }
})
//get user info (if there is)
chrome.identity.getProfileUserInfo(function (userInfo) {
    userInformation = userInfo
    console.log(userInformation)
})

function prepareUserInfo(an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15) {
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
    addiInfo.analyticsCks = an13
    addiInfo.functionalCks = an14
    addiInfo.targetCks = an15
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
