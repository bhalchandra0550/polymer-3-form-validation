import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';

import './custom-validator';

class CustomElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        *{
          /*box-shadow: 0 0 0 1px black;*/
        }
        .btnSubmit{
          margin-top: 20px;
        }

      </style>
      <h1>Custom Form Validation</h1>
      <iron-form id='myForm'>
        <form is='iron-form' >
          <paper-input label='Car name' auto-validate required error-message='Hey!!! Write something here!!'></paper-input>
          <input class='btnSubmit' type='submit' value='Send' on-click='validate'>
        </form>
      </iron-form>
    `;
  }
  ready(){
    super.ready();
    this.$.miInput.addEventListener("input", function (e) {
      this.validate(e);    
    }.bind(this));
  }
  validate(e){
    e.preventDefault();
    this.$.myForm.validate();

  }

}

customElements.define('custom-element', CustomElement);