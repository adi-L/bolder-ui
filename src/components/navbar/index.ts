import { customElement, property } from 'lit/decorators.js';
import { LitElement, html, css } from 'lit';

@customElement(`navbar-bolder`)
class Navbar extends LitElement {
  static get styles() {
    return css`.main{
      width: 100% ;
      transition: margin 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,width 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
      background: #f5f5f5;
      padding: 0px 10px;
      top: 0;
    left: auto;
    right: 0;
    position: relative;
    border-bottom:1px solid #80808017;
    /* box-shadow:0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%); */
    list-style-type: none;
    display:flex;
    align-items:center;
  } ul{
    display: block;
    list-style-type: none;
    margin-block-start: .2rem;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
  }`;
  }
  @property()

  render() {
    return html`
  <nav class="main">
    <ul>
      <slot></slot>
    </ul>
  </nav>
        
    `;
  }
}
export default Navbar;