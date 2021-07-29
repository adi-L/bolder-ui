import { customElement, property } from 'lit/decorators.js';
import { LitElement, html, css } from 'lit';

@customElement(`nav-item`)
class NavbarItem extends LitElement {
  static get styles() {
    return css`
    :host{
            list-style-type: none;
            float: left !important;
            margin-right:.5rem;
            margin-left:.5rem;
            display: list-item;
            text-align: -webkit-match-parent;
  }`;
  }
  @property()

  render() {
    return html`
    <btn-bolder>
      <slot></slot>
    </btn-bolder>      
    `;
  }
}
export default NavbarItem;