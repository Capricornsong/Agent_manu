/*
 * @Author: Liusong He
 * @Date: 2022-07-19 14:06:29
 * @LastEditTime: 2022-08-21 16:21:17
 * @FilePath: \Agent_manu\option.js
 * @Email: lh2u21@soton.ac.uk
 * @Description: 
 */
let page = document.getElementById("buttonDiv")
let selectedClassName = "current"
let submitBtn1 = document.getElementById("submitBtn1")
let submitBtn2 = document.getElementById('submitBtn2')
let submitBtn3 = document.getElementById('submitBtn3')
let an1 = -1
let an2 = -1
let an3 = -1
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2b", "#4688f1"]
const reIntro = document.getElementById('reintro')
const title = document.getElementById('reintroTitle')
const intro = document.getElementById('intro')
let reintroRedo = document.getElementById('reintroRedo')
let firstQuestionnaire = document.getElementById('firstQuestionnaire')
let secondQuestionnaire = document.getElementById('secondQuestionnaire')
let secformInstra = document.getElementById('secformInstra')
let manuSelect = document.getElementById('manu_select')
let manuSelectDiv = document.getElementById('manuSelectionDiv')
let role, userInformation
//get user info (if there is)
chrome.identity.getProfileUserInfo(function (userInfo) {
  userInformation = userInfo
  console.log(userInformation)
})


//Get current level, adjust the intro text
const level = chrome.storage.sync.get('level', ({ level }) => {
  console.log('option.js level:' + level)
  if (level && level == 3) {
    intro.style.display = 'none'
    title.innerHTML = " <h2>Your Privacy Personas is <strong>Privacy Fundamentalists</strong></h2>"
    reintro.style.display = 'block'
    manuSelect.innerHTML = '<option value="1" class="manuSelect">Privacy Unconcerned</option><option value="2" class="manuSelect">Privacy Pragmatists</option>'
    manuSelectDiv.style.display = 'block'
  }
  else if (level && level == 2) {
    intro.style.display = 'none'
    title.innerHTML = " <h2>Your Privacy Personas is <strong>Privacy Pragmatists</strong></h2>"
    reintro.style.display = 'block'
    manuSelect.innerHTML = '<option value="1" class="manuSelect">Privacy Unconcerned</option><option value="3" class="manuSelect">Privacy Fundamentalists</option>'
    manuSelectDiv.style.display = 'block'
  }
  else if (level && level == 1) {
    intro.style.display = 'none'
    title.innerHTML = " <h2>Your Privacy Personas is <strong>Privacy Unconcerned</strong></h2>"
    reintro.style.display = 'block'
    manuSelect.innerHTML = '<option value="2" class="manuSelect">Privacy Pragmatists</option><option value="3" class="manuSelect">Privacy Fundamentalists</option>'
    manuSelectDiv.style.display = 'block'
  }
  else { }
})
const level1 = level
//submit event
submitBtn1.addEventListener("click", handleFirstForm)
function handleFirstForm(event) {
  const radioButtons1 = document.querySelectorAll('input[name="form1Question1"]')
  const radioButtons2 = document.querySelectorAll('input[name="form1Question2"]')
  const radioButtons3 = document.querySelectorAll('input[name="form1Question3"]')
  for (const radioButton of radioButtons1) {
    if (radioButton.checked) {
      // an1 = parseInt(radioButton.id.split('_op')[1])
      an1 = parseInt(radioButton.value)
      console.log(radioButton.value)
      break
    }
  }
  for (const radioButton of radioButtons2) {
    if (radioButton.checked) {
      // an2 = parseInt(radioButton.id.split('_op')[1])
      an2 = parseInt(radioButton.value)
      console.log(radioButton.value)
      break
    }
  }
  for (const radioButton of radioButtons3) {
    if (radioButton.checked) {
      // an3 = parseInt(radioButton.id.split('_op')[1])
      an3 = parseInt(radioButton.value)
      console.log(radioButton.value)
      break
    }
  }
  // an1 = an1.split('_op')[1]
  // an2 = an2.split('_op')[1]
  // an3 = an3.split('_op')[1]
  console.log(an1 + ' ' + an2 + ' ' + an3)
  if (an1 != -1 && an2 != -1 && an3 != -1) {
    var userInfo = userInformation
    let level
    let result = an1 + an2 + an3
    var obj = new Object()
    console.log("result: " + result)
    if (result == 12) {
      level = 3
      role = 'Privacy Fundamentalists'
      chrome.storage.sync.set({ level }, function () {
        console.log('level is set to ' + level)
      })
      // chrome.notifications.create(opt)
      //sent the result to server

      obj.level = "3"
      obj.userInfo = userInfo
      var oReq = new XMLHttpRequest()
      oReq.open('POST', 'http://localhost:3000/level', true)
      oReq.setRequestHeader("Content-Type", "application/json")
      oReq.send(JSON.stringify(obj))
      console.log('aleady send request')
      window.alert("After system analysis, you are " + role)
      // event.preventDefault()
    }
    else if (result == 125) {
      level = 1
      role = 'Privacy Unconcerned'
      chrome.storage.sync.set({ level }, function () {
        console.log('level is set to ' + level)
      })
      //sent the result to server\
      obj.level = "1"
      obj.userInfo = userInfo
      var oReq = new XMLHttpRequest()
      oReq.open('POST', 'http://localhost:3000/level', true)
      oReq.setRequestHeader("Content-Type", "application/json")
      oReq.send(JSON.stringify(obj))
      console.log('aleady send request')
      window.alert("After system analysis, you are " + role)
    }
    else {
      level = 2
      isFinish = 0
      role = 'Privacy Pragmatists'
      chrome.storage.sync.set({ level }, function () {
        console.log('level is set to ' + level)
      })
      //For showing the second form
      // chrome.storage.sync.set({ isFinish }, function () {
      //   console.log('level is set to ' + isFinish)
      // })
      //Change the view, show the second form
      window.alert("After system analysis, you are " + role + ". Please finish the following question to get a more accurate result.")
      reintroRedo.style.display = 'none'
      firstQuestionnaire.style.display = 'none'
      secondQuestionnaire.style.display = 'block'
      secformInstra.style.display = 'block'
      event.preventDefault()
    }
  }
  // window.alert("After system analysis, you are " + role)
  // event.preventDefault()
}

submitBtn2.addEventListener('click', handleSecondForm)

function handleSecondForm(event) {
  let an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12
  const radioButtons1 = document.querySelectorAll('input[name="form2Question1"]')
  const radioButtons2 = document.querySelectorAll('input[name="form2Question2"]')
  const radioButtons3 = document.querySelectorAll('input[name="form2Question3"]')
  const radioButtons4 = document.querySelectorAll('input[name="form2Question4"]')
  const radioButtons5 = document.querySelectorAll('input[name="form2Question5"]')
  const radioButtons6 = document.querySelectorAll('input[name="form2Question6"]')
  const radioButtons7 = document.querySelectorAll('input[name="form2Question7"]')
  const radioButtons8 = document.querySelectorAll('input[name="form2Question8"]')
  const radioButtons9 = document.querySelectorAll('input[name="form2Question9"]')
  const radioButtons10 = document.querySelectorAll('input[name="form2Question10"]')
  const radioButtons11 = document.querySelectorAll('input[name="form2Question11"]')
  const radioButtons12 = document.querySelectorAll('input[name="form2Question12"]')
  const radioButtons13 = document.querySelectorAll('input[name="form2Question13"]')
  const radioButtons14 = document.querySelectorAll('input[name="form2Question14"]')
  const radioButtons15 = document.querySelectorAll('input[name="form2Question15"]')


  for (const radioButton of radioButtons1) {
    if (radioButton.checked) {
      // an1 = parseInt(radioButton.id.split('_op')[1])
      an1 = parseInt(radioButton.value)
      console.log(radioButton.value)
      chrome.storage.sync.set({ an1 }, function () {
        console.log('an1 is set to ' + an1)
      })
      break
    }
  }
  for (const radioButton of radioButtons2) {
    if (radioButton.checked) {
      an2 = parseInt(radioButton.value)
      chrome.storage.sync.set({ an2 }, function () {
        console.log('an2 is set to ' + an2)
      })
      console.log(radioButton.value)
      break
    }
  }
  for (const radioButton of radioButtons3) {
    if (radioButton.checked) {
      an3 = parseInt(radioButton.value)
      chrome.storage.sync.set({ an3 }, function () {
        console.log('an3 is set to ' + an3)
      })
      console.log(radioButton.value)
      break
    }
  }
  for (const radioButton of radioButtons4) {
    if (radioButton.checked) {
      an4 = parseInt(radioButton.value)
      chrome.storage.sync.set({ an4 }, function () {
        console.log('an4 is set to ' + an4)
      })
      console.log(radioButton.value)
      break
    }
  }
  for (const radioButton of radioButtons5) {
    if (radioButton.checked) {
      an5 = parseInt(radioButton.value)
      chrome.storage.sync.set({ an5 }, function () {
        console.log('an5 is set to ' + an5)
      })
      console.log(radioButton.value)
      break
    }
  }
  for (const radioButton of radioButtons6) {
    if (radioButton.checked) {
      an6 = parseInt(radioButton.value)
      chrome.storage.sync.set({ an6 }, function () {
        console.log('an6 is set to ' + an6)
      })
      console.log(radioButton.value)
      break
    }
  }
  for (const radioButton of radioButtons7) {
    if (radioButton.checked) {
      an7 = parseInt(radioButton.value)
      chrome.storage.sync.set({ an7 }, function () {
        console.log('an7 is set to ' + an7)
      })
      console.log(radioButton.value)
      break
    }
  }
  for (const radioButton of radioButtons8) {
    if (radioButton.checked) {
      an8 = parseInt(radioButton.value)
      chrome.storage.sync.set({ an8 }, function () {
        console.log('an8 is set to ' + an8)
      })
      console.log(radioButton.value)
      break
    }
  }
  for (const radioButton of radioButtons9) {
    if (radioButton.checked) {
      an9 = parseInt(radioButton.value)
      chrome.storage.sync.set({ an9 }, function () {
        console.log('an9 is set to ' + an9)
      })
      console.log(radioButton.value)
      break
    }
  }
  for (const radioButton of radioButtons10) {
    if (radioButton.checked) {
      an10 = parseInt(radioButton.value)
      chrome.storage.sync.set({ an10 }, function () {
        console.log('an10 is set to ' + an10)
      })
      console.log(radioButton.value)
      break
    }
  }
  for (const radioButton of radioButtons11) {
    if (radioButton.checked) {
      an11 = parseInt(radioButton.value)
      chrome.storage.sync.set({ an11 }, function () {
        console.log('an11 is set to ' + an11)
      })
      console.log(radioButton.value)
      break
    }
  }
  for (const radioButton of radioButtons12) {
    if (radioButton.checked) {
      an12 = parseInt(radioButton.value)
      chrome.storage.sync.set({ an12 }, function () {
        console.log('an12 is set to ' + an12)
      })
      console.log(radioButton.value)
      break
    }
  }
  for (const radioButton of radioButtons13) {
    if (radioButton.checked) {
      // an1 = parseInt(radioButton.id.split('_op')[1])
      an13 = parseInt(radioButton.value)
      console.log(radioButton.value)
      chrome.storage.sync.set({ an13 }, function () {
        console.log('an13 is set to ' + an13)
      })
      break
    }
  }
  for (const radioButton of radioButtons14) {
    if (radioButton.checked) {
      // an1 = parseInt(radioButton.id.split('_op')[1])
      an14 = parseInt(radioButton.value)
      console.log(radioButton.value)
      chrome.storage.sync.set({ an14 }, function () {
        console.log('an14 is set to ' + an14)
      })
      break
    }
  }
  for (const radioButton of radioButtons15) {
    if (radioButton.checked) {
      // an1 = parseInt(radioButton.id.split('_op')[1])
      an15 = parseInt(radioButton.value)
      console.log(radioButton.value)
      chrome.storage.sync.set({ an15 }, function () {
        console.log('an15 is set to ' + an15)
      })
      break
    }
  }
  window.alert("Your preference has been successfully set!")

  //sent the result to server
  prepareUserInfo(an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15)
  // event.preventDefault()
}

function prepareUserInfo(an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15) {
  var obj = new Object()
  var addiInfo = new Object()
  var userInfo = userInformation
  obj.level = "2"
  obj.userInfo = userInfo
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
  var jsonString = JSON.stringify(obj)
  console.log(jsonString)
  var oReq = new XMLHttpRequest()
  oReq.open('POST', 'http://localhost:3000/level', true)
  oReq.setRequestHeader("Content-Type", "application/json")
  oReq.send(jsonString)
  console.log('aleady send request')
}

function sentRequestSaveLevel(N) {
  if (N === 1) {

  }
  else if (N === 2) {

  }
  else { }
}

submitBtn3.addEventListener('click', handleManu)
function handleManu(event) {

  const selectBoxs = document.querySelectorAll('option[class="manuSelect"]')
  console.log(level1)
  if (selectBoxs.length == 0) {
    window.alert("Please select you privacy persona before submit!")
  }
  else {
    var userInfo = userInformation
    var obj = new Object()
    for (const selection of selectBoxs) {
      if (selection.selected) {
        if (level == selection.value) {
          window.alert("Please select a different Privacy Persona!" + role)
        }
        else if (selection.value == 2) {
          let level = 2
          isFinish = 0
          role = 'Privacy Pragmatists'
          chrome.storage.sync.set({ level }, function () {
            console.log('level is set to ' + level)
          })

          window.alert("Because you selected" + role + ". Please finish the following question to get a more accurate result.")
          reintroRedo.style.display = 'none'
          firstQuestionnaire.style.display = 'none'
          secondQuestionnaire.style.display = 'block'
          secformInstra.style.display = 'block'
          event.preventDefault()
        }
        else if (selection.value == 1) {
          let level = 1
          role = 'Privacy Unconcerned'
          chrome.storage.sync.set({ level }, function () {
            console.log('level is set to ' + level)
          })
          //sent the result to server\
          obj.level = "1"
          obj.userInfo = userInfo
          var oReq = new XMLHttpRequest()
          oReq.open('POST', 'http://localhost:3000/level', true)
          oReq.setRequestHeader("Content-Type", "application/json")
          oReq.send(JSON.stringify(obj))
          console.log('aleady send request')
          window.alert("Select successfully, now you are " + role)
        }
        else {
          let level = 3
          role = 'Privacy Fundamentalists'
          chrome.storage.sync.set({ level }, function () {
            console.log('level is set to ' + level)
          })

          //sent the result to server
          obj.level = "3"
          obj.userInfo = userInfo
          var oReq = new XMLHttpRequest()
          oReq.open('POST', 'http://localhost:3000/level', true)
          oReq.setRequestHeader("Content-Type", "application/json")
          oReq.send(JSON.stringify(obj))
          console.log('aleady send request')
          window.alert("Select successfully, now you are " + role)
        }
        break
      }
    }
  }

}

function handleButtonClick(event) {
  // Remove styling from the previously selected color
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  )
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName)
  }

  // Mark the button as selected
  let color = event.target.dataset.color
  event.target.classList.add(selectedClassName)
  chrome.storage.sync.set({ color })
}

// Add a button to the page for each supplied color
function constructOptions(buttonColors) {
  chrome.storage.sync.get("color", (data) => {
    let currentColor = data.color
    // For each color we were provided…
    for (let buttonColor of buttonColors) {
      // …create a button with that color…
      let button = document.createElement("button")
      button.dataset.color = buttonColor
      button.style.backgroundColor = buttonColor

      // …mark the currently selected color…
      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName)
      }

      // …and register a listener for when that button is clicked
      button.addEventListener("click", handleButtonClick)
      page.appendChild(button)
    }
  })
}

//Initallize the page bu constructing the color options
// constructOptions(presetButtonColors)

