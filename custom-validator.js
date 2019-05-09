import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';   
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import {IronValidatorBehavior} from '@polymer/iron-validator-behavior/iron-validator-behavior.js';

class CustomValidator extends mixinBehaviors([IronValidatorBehavior], PolymerElement) {
    validate(value) {
      return value === 'tonto';
    }
}
customElements.define('custom-validator', CustomValidator);