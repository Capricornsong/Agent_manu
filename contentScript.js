/*
 * @Author: Liusong He
 * @Date: 2022-07-24 15:16:59
 * @LastEditTime: 2022-08-03 19:22:31
 * @FilePath: \Agent_manu\contentScript.js
 * @Email: lh2u21@soton.ac.uk
 * @Description: 
 */


(() => {
    // const toasts = document.createElement('div')
    // toasts.innerHTML = '<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">< div class="d-flex" ><div class="toast-body">Hello, world! This is a toast message.</div><button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div ></div >'
    // const body = document.getElementsByTagName('body')[0]
    // let myAlert = document.querySelector('.toast')
    // let bsAlert = new bootstrap.Toast(myAlert)
    // body.appendChild(toasts)
    // const t = document.getElementsByClassName('toast align-items-center')
    var category = -1
    chrome.storage.sync.get('level', ({ level }) => {
        if (level) {
            category = level
        }
    })
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        console.log("onMessage")
        const { type, value } = obj
        console.log("type:" + type)
        toasts.show()
        t.show()
        bsAlert.show()
        if (type === 'Google') {
            googleBan()
        }
        else {
            other()
        }
    })

    const googleBan = () => {
        const banner = document.getElementById("xe7COe")
        console.log('heLlo world')
        if (banner) {
            if (category == 1) {
                const acceptAll = document.getElementById("L2AGLb")
                if (acceptAll) {
                    // acceptAll.click()
                }

            }
            else if (category == 2) {
                const acceptAll = document.getElementById("L2AGLb")
                // acceptAll.click()
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
        const banner = document.getElementById('onetrust-banner-sdk')
        if (banner) {
            if (category == 1) {
                const acceptAll = document.getElementById("onetrust-accept-btn-handler")
                // acceptAll.click()
            }
            else if (category == 2) {
                const showPurpose = document.getElementById('onetrust-pc-btn-handler')
                showPurpose.click()
                //find all the options 3/8/2022


                // const acceptAll = document.getElementById("L2AGLb")
                // acceptAll.click()
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
    googleBan()
})()
