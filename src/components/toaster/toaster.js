const toaster = document.getElementById('toaster')

function addToast (type, header, message) {

  const toastHd = document.createElement('div')
  toastHd.className = 'toast__hd'
  toastHd.textContent = header

  const toastBody = document.createElement('div')
  toastBody.className = 'toast__body'
  toastBody.textContent = message

  const toast = document.createElement('div')
  toast.classList.add('toast')
  toast.classList.add('__' + type)

  toast.appendChild(toastHd)
  toast.appendChild(toastBody)

  toaster.appendChild(toast)

  toast.addEventListener('transitionend', function (event) {
    if (event.propertyName !== 'transform') return

    if (toast.classList.contains('__show-toast')) {
      setTimeout(function () {
        toast.classList.remove('__show-toast')
      }, 5000)
    } else {
      toaster.removeChild(toast)
    }
  }, false)

  setTimeout(() => toast.classList.add('__show-toast'), 100)
}
