/*
 * @Author: Liusong He
 * @Date: 2022-07-24 15:16:59
 * @LastEditTime: 2022-08-24 21:05:50
 * @FilePath: \Agent_manu\contentScript.js
 * @Email: lh2u21@soton.ac.uk
 * @Description: 
 */


(() => {
    let any1, any2, any3, any4, any5, any6, any7, any8, any9, any10, any11, any12, any13, any14, any15
    var category = -1
    let Times
    chrome.storage.sync.get('level', ({ level }) => {
        if (level && level == 2) {
            category = level
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
                any13 = an12
                any14 = an14
                any15 = an15
                console.log('an15: ' + an15)
            })
        }
        else if (level) {
            category = level
        }
    })
    chrome.storage.sync.get('times', ({ times }) => {
        console.log(times)
        Times = times
    })

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        console.log("contentScript type" + obj.type)
        // const { type, value } = obj
        // toasts.show()
        // t.show()
        // bsAlert.show()

        // if (obj.times) {
        //     console.log('times receive from background in contentscript' + obj.times)
        //     times = obj.times
        // }

        if (obj.type && obj.type === 'Google') {
            googleBan()
        }
        else if (obj.type && obj.type === 'Other') {
            other()
        }
    })

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
        setTimeout(() => {
            //detect is there a OneTrust notice on the page
            const banner = document.getElementById('onetrust-banner-sdk')
            const QuantCastBanner = document.getElementById('qc-cmp2-container')
            console.log({ QuantCastBanner })
            //If there is a notice from OneTrust 
            if (banner) {
                //For Privacy Fundamentalists
                if (category == 1) {
                    const acceptAll = document.getElementById("onetrust-accept-btn-handler")
                    // acceptAll.click()
                }
                //For Privacy Pragmatists
                else if (category == 2) {
                    console.log('other cat = 2')
                    const showPurpose = document.getElementById('onetrust-pc-btn-handler')
                    if (showPurpose)
                        showPurpose.click()
                    setTimeout(() => {
                        let performanceCookies1 = document.getElementById('ot-group-id-C0002')
                        let performanceCookies2 = document.getElementById('ot-group-id-2')
                        let storeInfo = document.getElementById('ot-group-id-IABV2_1')
                        if (performanceCookies1 || storeInfo) {
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
                            // functoinalCookies ? functoinalCookies.checked = true : console.log('funcCookies is null')
                            // targetingCookies ? targetingCookies.checked = true : console.log('targetCookies is null')
                            // performanceCookies1 ? performanceCookies1.checked = true : console.log('performanceCookies1 is null')
                            any1 == 1 && storeInfo ? storeInfo.checked = true : console.log('any1: ' + any1)
                            any2 == 1 && preciseGeolocation ? preciseGeolocation.checked = true : console.log('any2: ' + any2)
                            any3 == 1 && basicAd ? basicAd.checked = true : console.log('any3: ' + any3)
                            any4 == 1 && createAdsProfile ? createAdsProfile.checked = true : console.log('any4: ' + any4)
                            any5 == 1 && selectAdsProfile ? selectAdsProfile.checked = true : console.log('any5: ' + any5)
                            any6 == 1 && createContentProfile ? createContentProfile.checked = true : console.log('any6: ' + any6)
                            any7 == 1 && seleteContentProfile ? seleteContentProfile.checked = true : console.log('any7: ' + any7)
                            any8 == 1 && measureAd ? measureAd.checked = true : console.log('any8: ' + any8)
                            any9 == 1 && measureContent ? measureContent.checked = true : console.log('any9: ' + any9)
                            any10 == 1 && market ? market.checked = true : console.log('any10: ' + any10)
                            any11 == 1 && improve ? improve.checked = true : console.log('any11: ' + any11)
                            any12 == 1 && activityScan ? activityScan.checked = true : console.log('any12: ' + any12)
                            any13 == 1 && performanceCookies1 ? performanceCookies1.checked = true : console.log('any13: ' + any13)
                            any14 == 1 && functoinalCookies ? functoinalCookies.checked = true : console.log('any14: ' + any14)
                            any15 == 1 && targetingCookies ? targetingCookies.checked = true : console.log('any15: ' + any15)

                            // confirmBtn.click()
                        }
                        //only ask cookies
                        else {
                            let functoinalCookies = document.getElementById('ot-group-id-3')
                            let targetingCookies = document.getElementById('ot-group-id-4')
                            let socialMediaCookies = document.getElementById('ot-group-id-8')
                            let confirmBtn = document.getElementsByClassName('save-preference-btn-handler onetrust-close-btn-handler')
                            // if (functoinalCookies)
                            any14 == 1 && functoinalCookies ? functoinalCookies.checked = true : console.log('any14: ' + any14)
                            // functoinalCookies.checked = true
                            // if (targetingCookies)
                            any15 == 1 && targetingCookies ? targetingCookies.checked = true : console.log('any15: ' + any15)
                            // targetingCookies.checked = true
                            // if (performanceCookies2)
                            any13 == 1 ? performanceCookies2.checked = true : console.log('any13: ' + any13)
                            // performanceCookies2.checked = true
                            any6 == 1 && socialMediaCookies ? socialMediaCookies.checked = true : console.log('any6: ' + any6)

                            // confirmBtn.click()
                        }
                    }, 600)
                    // const acceptAll = document.getElementById("L2AGLb")
                }
                //For Privact Unconcerned
                else if (category == 3) {
                    const rejectAll = document.getElementById("onetrust-reject-all-handler")
                    if (rejectAll) {
                        // rejectAll.click()
                    }
                    else {
                        const showPurpose = document.getElementById('onetrust-pc-btn-handler')
                        let confirmBtn = document.getElementsByClassName('save-preference-btn-handler onetrust-close-btn-handler')
                        if (showPurpose) {
                            // showPurpose.click()
                            // confirmBtn.click()
                        }
                    }

                }
                //Calculation the number of consent, and set to clound
                var times = Times + 1
                console.log('times: ' + times)
                chrome.storage.sync.set({ times }, function () {
                    console.log('times is set to ' + times)
                })
            }
            else if (QuantCastBanner) {
                //For Privacy Fundamentalists
                buttonCollections = document.getElementsByClassName('qc-cmp2-summary-buttons')[0]
                console.log(buttonCollections.childNodes[0])
                if (category == 1) {
                    const acceptAll = buttonCollections.childNodes[1]
                    // acceptAll.click()
                }
                //For Privacy Pragmatists
                else if (category == 2) {
                    const showPurpose = buttonCollections.childNodes[0]
                    if (showPurpose)
                        showPurpose.click()
                    setTimeout(() => {
                        let storeInfo = document.getElementsByClassName('qc-cmp2-list-item-header')
                        let len = storeInfo.length
                        for (let i = 0; i < len; i++) {
                            document.getElementsByClassName('qc-cmp2-list-item-header')[i].click()
                        }
                        setTimeout(() => {
                            if (storeInfo.length > 2) {
                                // document.getElementsByClassName('qc-cmp2-list-item-header')[0].click()
                                let storeInfo = document.getElementsByClassName('qc-cmp2-toggle css-wmqf8e')[0]
                                let basicAd = document.getElementsByClassName('qc-cmp2-toggle css-wmqf8e')[1]
                                let createAdsProfile = document.getElementsByClassName('qc-cmp2-toggle css-wmqf8e')[2]
                                let selectAdsProfile = document.getElementsByClassName('qc-cmp2-toggle css-wmqf8e')[3]
                                let createContentProfile = document.getElementsByClassName('qc-cmp2-toggle css-wmqf8e')[4]
                                let seleteContentProfile = document.getElementsByClassName('qc-cmp2-toggle css-wmqf8e')[5]
                                let measureAd = document.getElementsByClassName('qc-cmp2-toggle css-wmqf8e')[6]
                                let measureContent = document.getElementsByClassName('qc-cmp2-toggle css-wmqf8e')[7]
                                let market = document.getElementsByClassName('qc-cmp2-toggle css-wmqf8e')[8]
                                let improve = document.getElementsByClassName('qc-cmp2-toggle css-wmqf8e')[9]
                                let activityScan = document.getElementsByClassName('qc-cmp2-toggle css-wmqf8e')[10]
                                let confirmBtn = document.getElementsByClassName(' css-47sehv')[1]

                                any1 == 1 ? storeInfo.click() : console.log('any1: ' + any1)
                                // any2 == 1 ? preciseGeolocation.setAttribute('aria-checked','true') = true : console.log('any2: ' + any2)
                                any3 == 1 && basicAd ? basicAd.click() : console.log('any3: ' + any3)
                                any4 == 1 && createAdsProfile ? createAdsProfile.click() : console.log('any4: ' + any4)
                                any5 == 1 && selectAdsProfile ? selectAdsProfile.click() : console.log('any5: ' + any5)
                                any6 == 1 && createContentProfile ? createContentProfile.click() : console.log('any6: ' + any6)
                                any7 == 1 && seleteContentProfile ? seleteContentProfile.click() : console.log('any7: ' + any7)
                                any8 == 1 && measureAd ? measureAd.click() : console.log('any8: ' + any8)
                                any9 == 1 && measureContent ? measureContent.click() : console.log('any9: ' + any9)
                                any10 == 1 && market ? market.click() : console.log('any10: ' + any10)
                                any11 == 1 && improve ? improve.click() : console.log('any11: ' + any11)
                                any12 == 1 && activityScan ? activityScan.click() : console.log('any12: ' + any12)
                                // confirmBtn.click()
                            }
                        }, 300)

                        //only ask cookies
                        // else {
                        //     let functoinalCookies = document.getElementById('ot-group-id-3')
                        //     let targetingCookies = document.getElementById('ot-group-id-4')
                        //     let socialMediaCookies = document.getElementById('ot-group-id-8')
                        //     let confirmBtn = document.getElementsByClassName('save-preference-btn-handler onetrust-close-btn-handler')
                        //     if (functoinalCookies)
                        //         any14 == 1 ? functoinalCookies.checked = true : console.log('any14: ' + any14)
                        //     // functoinalCookies.checked = true
                        //     if (targetingCookies)
                        //         any15 == 1 ? targetingCookies.checked = true : console.log('any15: ' + any15)
                        //     // targetingCookies.checked = true
                        //     if (performanceCookies2)
                        //         any13 == 1 ? performanceCookies2.checked = true : console.log('any13: ' + any13)
                        //     // performanceCookies2.checked = true
                        //     any6 == 1 ? socialMediaCookies.checked = true : console.log('any6: ' + any6)

                        //     // confirmBtn.click()
                        // }
                    }, 600)
                    // const acceptAll = document.getElementById("L2AGLb")
                }
                //For Privact Unconcerned
                else if (category == 3) {
                    const showPurpose = buttonCollections.childNodes[0]
                    if (showPurpose)
                        showPurpose.click()
                    setTimeout(() => {
                        const rejectAll = document.getElementsByClassName('css-8rroe4')[0]
                        if (rejectAll) {
                            // rejectAll.click()
                        }
                    }, 300)
                }
                //Calculation the number of consent, and set to clound
                var times = Times + 1
                console.log('times: ' + times)
                chrome.storage.sync.set({ times }, function () {
                    console.log('times is set to ' + times)
                })
            }
        }, 600)
    }
    // googleBan()
})()
