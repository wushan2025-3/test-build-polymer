import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          font-family: sans-serif;
          padding: 20px;
        }
        h1 {
          color: #333;
        }
      </style>
      <h1>Hello Polymer!</h1>
      <p>This is a Polymer 3 element built with Vite.</p>
    `
  }
}

customElements.define('my-app', MyApp)
