export default customElements.define('custom-dialog', class CustomDialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
  }
  connectedCallback() {
    if (super.connectedCallback) super.connectedCallback();
    this.shadowRoot.innerHTML = this.template;
  }
  get template() {
    return `
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
});
