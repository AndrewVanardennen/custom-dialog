import { define, ElementBase } from './base.js';

export default define(class CustomDialog extends ElementBase {
  constructor() {
    super();
  }
  get template() {
    return html`
<style>
  :host {
    position: absolute;
    top: 50%;
    left: 50%;
    background: var(--custom-dialog-background, #fff);
    height: var(--custom-dialog-size, 250px);
    width: --custom-dialog-size;
    transform: translate(-50%, -50%);
  }
  :host(.opened) {
    opacity: 1;
    pointer-events: auto;
  }
</style>
<slot></slot>
    `;
  }
  show() {
    this.classlist.add('opened');
  }
  hide() {
    this.classlist.remove('opened');
  }
})
