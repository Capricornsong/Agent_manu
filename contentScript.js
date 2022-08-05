/*
 * @Author: Liusong He
 * @Date: 2022-07-24 15:16:59
 * @LastEditTime: 2022-08-05 17:13:42
 * @FilePath: \Agent_manu\contentScript.js
 * @Email: lh2u21@soton.ac.uk
 * @Description: 
 */


(() => {
    let any1, any2, any3, any4, any5, any6, any7, any8, any9, any10, any11, any12
    var category = -1
    chrome.storage.sync.get('level', ({ level }) => {
        if (level && level == 2) {
            category = level
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

                console.log('an8: ' + an8)
            })
        }
        else if (level) {
            category = level
        }
    })


    // chrome.tabs.onUpdated.addListener((tabId, tab) => {
    //     // console.log(tab.url)
    //     // console.log('tabid: ' + tabId)
    //     if (tab.url && tab.url.includes("google.com/search")) {
    //         // const queryParameters = tab.url.split("?")[1]
    //         // const urlParameters = new URLSearchParams(queryParameters)
    //         // console.log(urlParameters)
    //         console.log("onUpdated-google")
    //         chrome.tabs.sendMessage(tabId, { type: "Google" })

    //     }
    //     else if (tab.url) {
    //         console.log("onUpdated-Other")
    //         chrome.tabs.sendMessage(tabId, { type: "Other" })
    //     }
    // })
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        console.log("onMessage obj" + obj)
        const { type, value } = obj
        console.log("type:" + type)
        // toasts.show()
        // t.show()
        // bsAlert.show()
        if (type === 'Google') {
            googleBan()
        }
        else if (type === 'Other') {
            other()
        }
    })

    // document.addEventListener('DOMSubtreeModified', (e) => {
    //     console.log(e)
    // })

    // chrome.runtime.onMessage.addListener(
    //     function (req, sender, cb) {
    //         console.log(req)
    //         console.log('fafguigfuiluihgehwioghwiogho')
    //         cb({ other: 'value' })
    //     }
    // )

    // chrome.runtime.onConnect.addListener(port => {
    //     port.onMessage.addListener(function (request, sender, sendResponse) {
    //         console.log(sender.tab ?
    //             "from a content script:" + sender.tab.url :
    //             "from the extension")

    //         sendResponse({ farewell: "goodbye" })
    //     })
    // })

    // chrome.runtime.onMessage.addListener(
    //     function (request, sender, sendResponse) {
    //         console.log(sender.tab ?
    //             "from a content script:" + sender.tab.url :
    //             "from the extension")

    //         sendResponse({ farewell: "goodbye" })
    //     }
    // )


    const googleBan = () => {
        console.log('hello google')
        const banner = document.getElementById("xe7COe")
        if (banner) {
            if (category == 1 || category == 2) {
                const acceptAll = document.getElementById("L2AGLb")
                if (acceptAll) {
                    // acceptAll.click()
                }
            }
            else if (category == 3) {
                const rejectAll = document.getElementById("W0wltc")
                if (rejectAll) {
                    // rejectAll.click()
                }
            }
            // rejectAll.click()
            console.log(banner)
            // banner.style.visibility = "hidden"
        }
    }

    const other = () => {
        console.log("hello others")
        // console.log({ document })
        const checkboxlist = document.querySelectorAll('input[type=checkbox]')
        console.log({ checkboxlist })
        const banner = document.getElementById('onetrust-banner-sdk')
        console.log({ banner })
        if (banner) {
            if (category == 1) {
                const acceptAll = document.getElementById("onetrust-accept-btn-handler")
                // acceptAll.click()
            }
            else if (category == 2) {
                console.log('other cat = 2')
                const showPurpose = document.getElementById('onetrust-pc-btn-handler')
                if (showPurpose)
                    showPurpose.click()
                setTimeout(() => {

                    let performanceCookies1 = document.getElementById('ot-group-id-C0002')
                    let performanceCookies2 = document.getElementById('ot-group-id-2')
                    if (performanceCookies1) {
                        let preciseGeolocation = document.getElementById('ot-group-id-ISFV2_1')
                        let functoinalCookies = document.getElementById('ot-group-id-C0003')
                        let targetingCookies = document.getElementById('ot-group-id-C0004')
                        let storeInfo = document.getElementById('ot-group-id-IABV2_1')
                        let basicAd = document.getElementById('ot-sub-group-id-IABV2_2')
                        let createAdsProfile = document.getElementById('ot-sub-group-id-IABV2_3')
                        let selectAdsProfile = document.getElementById('ot-sub-group-id-IABV2_4')
                        let createContentProfile = document.getElementById('ot-sub-group-id-IABV2_5')
                        let seleteContentProfile = document.getElementById('ot-sub-group-id-IABV2_6')
                        let measureAd = document.getElementById('ot-sub-group-id-IABV2_7')
                        let measureContent = document.getElementById('ot-sub-group-id-IABV2_8')
                        let market = document.getElementById('ot-sub-group-id-IABV2_9')
                        let improve = document.getElementById('ot-sub-group-id-IABV2_10')
                        let activityScan = document.getElementById('ot-group-id-ISFV2_2')
                        let confirmBtn = document.getElementsByClassName('save-preference-btn-handler onetrust-close-btn-handler')
                        functoinalCookies.checked = true
                        targetingCookies.checked = true
                        performanceCookies1.checked = true
                        any1 == 1 ? storeInfo.checked = true : console.log('any1: ' + any1)
                        any2 == 1 ? preciseGeolocation.checked = true : console.log('any2: ' + any2)
                        any3 == 1 ? basicAd.checked = true : console.log('any3: ' + any3)
                        any4 == 1 ? createAdsProfile.checked = true : console.log('any4: ' + any4)
                        any5 == 1 ? selectAdsProfile.checked = true : console.log('any5: ' + any5)
                        any6 == 1 ? createContentProfile.checked = true : console.log('any6: ' + any6)
                        any7 == 1 ? seleteContentProfile.checked = true : console.log('any7: ' + any7)
                        any8 == 1 ? measureAd.checked = true : console.log('any8: ' + any8)
                        any9 == 1 ? measureContent.checked = true : console.log('any9: ' + any9)
                        any10 == 1 ? market.checked = true : console.log('any10: ' + any10)
                        any11 == 1 ? improve.checked = true : console.log('any11: ' + any11)
                        an12 == 1 ? activityScan.checked = true : console.log('any12: ' + any12)

                        // confirmBtn.click()
                    }
                    //only ask cookies
                    else {
                        let functoinalCookies = document.getElementById('ot-group-id-3')
                        let targetingCookies = document.getElementById('ot-group-id-4')
                        let socialMediaCookies = document.getElementById('ot-group-id-8')
                        let confirmBtn = document.getElementsByClassName('save-preference-btn-handler onetrust-close-btn-handler')
                        functoinalCookies.checked = true
                        targetingCookies.checked = true
                        performanceCookies2.checked = true
                        any6 == 1 ? socialMediaCookies.checked = true : console.log('any6: ' + any6)

                        // confirmBtn.click()
                    }
                }, 500)
                // const acceptAll = document.getElementById("L2AGLb")
            }
            else if (category == 3) {
                const rejectAll = document.getElementById("onetrust-reject-all-handler")
                if (rejectAll) {
                    // rejectAll.click()
                }
                else {
                    const showPurpose = document.getElementById('onetrust-pc-btn-handler')
                    if (showPurpose) {
                        // showPurpose.click()
                    }
                }

            }
        }
    }
    // googleBan()
})()
