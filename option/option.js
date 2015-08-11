(function () {
  'use strict'
  let selector = document.getElementById('selector')
  chrome.storage.sync.get({behavior: 'element'}, function (item) {
    selector.value = item.behavior
  })
  document.getElementById('element').textContent = chrome.i18n.getMessage('selectElement')
  document.getElementById('area').textContent = chrome.i18n.getMessage('selectArea')

  selector.addEventListener('change', function (event) {
    chrome.storage.sync.set({behavior: event.target.value}, function () {
      document.querySelector('.alert-message').textContent = 'Saved'
      window.setTimeout(function () {
        document.querySelector('.alert-message').textContent = ''
      }, 2500)
    })
  })
})()