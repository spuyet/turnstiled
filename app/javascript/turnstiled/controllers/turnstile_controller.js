import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    siteKey: String,
  }

  connect() {
    turnstile.render(this.element, {
      sitekey: this.siteKeyValue,
      callback: this.callback.bind(this),
    })
  }

  callback(token) {
    this.dispatch('success', {
      detail: { token },
    })
  }
}
