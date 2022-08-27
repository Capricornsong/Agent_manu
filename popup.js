/*
 * @Author: Liusong He
 * @Date: 2022-07-19 13:44:31
 * @LastEditTime: 2022-08-27 19:52:20
 * @FilePath: \Agent_manu\popup.js
 * @Email: lh2u21@soton.ac.uk
 * @Description: 
 */

//Get current level and times, adjust the intro text
const beforeTest = document.getElementById('beforeTest')
const afterTest = document.getElementById('afterTest')
const sitesListBody = document.getElementById('sitesListBody')
const level = chrome.storage.sync.get(['level', 'times', 'urls'], ({ level, times, urls }) => {
  console.log('popup.js level:' + level)
  console.log('popup.js times:' + times)

  if (level && level == 3) {
    beforeTest.style.display = 'none'
    afterTest.innerHTML = " <h3>Your Privacy Personas is <strong>Privacy Fundamentalists</strong></h3><h5>The number of consent the agent has given: <span class='badge text-bg-primary'>" + times + "</span></h5>"
    afterTest.style.display = 'block'
  }
  else if (level && level == 2) {
    beforeTest.style.display = 'none'
    afterTest.innerHTML = " <h3>Your Privacy Personas is <strong>Privacy Pragmatists</strong></h3><h5>The number of consent the agent has given: <span class='badge text-bg-primary'>" + times + "</span></h5>"
    afterTest.style.display = 'block'
  }
  else if (level && level == 1) {
    beforeTest.style.display = 'none'
    afterTest.innerHTML = " <h3>Your Privacy Personas is <strong>Privacy Unconcerned</strong></h3><h5>The number of consent the agent has given: <span class='badge text-bg-primary'>" + times + "</span></h5>"
    afterTest.style.display = 'block'

  }
  else { }
  if (times != 0) {

    var html = ''
    for (let i = 0; i < urls.length; i++) {
      html += '<tr><th scope="row">' + i + '</th>' + '<td>' + urls[i] + '</td>'
    }
    sitesListBody.innerHTML = html + '</tr>'
    sitesList.style.display = 'block'
  }
})
// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color
// })

// high.addEventListener("click", () => {
//   let level = "high"
//   chrome.storage.local.set({ level })
//   chrome.storage.local.get("level", ({ level }) => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       const activeTabId = tabs[0].id
//       chrome.scripting.executeScript({
//         target: { tabId: activeTabId },
//         function: () => alert("High was been selected!")
//       })
//     })
//     console.log(level)
//   })
// })


// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor
//   })
// })

// The body of this function will be executed as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color
//   })
// }

