/*
 * @Author: Liusong He
 * @Date: 2022-07-19 13:44:31
 * @LastEditTime: 2022-07-24 16:27:26
 * @FilePath: \Agent_manu\popup.js
 * @Email: lh2u21@soton.ac.uk
 * @Description: 
 */
let high = document.getElementById("high")

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color
// })

high.addEventListener("click", () => {
  let level = "high"
  chrome.storage.local.set({ level })
  chrome.storage.local.get("level", ({ level }) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id
      chrome.scripting.executeScript({
        target: { tabId: activeTabId },
        function: () => alert("High was been selected!")
      })
    })
    console.log(level)
  })
})


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

