
function turnstile() {
}

turnstile.render = function(container, options) {
  var element = document.createElement('div')
  element.textContent = 'Cloudflare Turnstile'
  element.style.background = 'yellow'
  element.style.width = '100%'
  element.style.height = '65px'
  element.style.padding = '1rem'
  element.style.display = 'flex'
  element.style.alignItems = 'center'
  element.style.justifyContent = 'center'

  var input = Object.assign(document.createElement('input'), {
    type: 'hidden',
    name: 'cf-turnstile-response',
    autocomplete: 'off',
    ariaHidden: 'true',
  })

  container.appendChild(element)
  container.appendChild(input)

  setTimeout(function() {
    element.textContent = 'Cloudflare Turnstile'
    element.style.background = 'green'
    element.style.color = 'white'

    input.value = '1'

    if (options.callback) {
      options.callback('1')
    }
  }, 2000)
}
