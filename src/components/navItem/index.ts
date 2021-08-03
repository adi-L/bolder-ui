import { customElement, property } from 'lit/decorators.js';
import { LitElement, html, css, unsafeCSS } from 'lit';
import btnCSS from '../../props/button';
import theme from '../../theme';

@customElement(`bolder-nav-item`)
class NavbarItem extends LitElement {
  static get styles() {
    const stylesProps = theme.navItem.props;
    return css`
    :host{
            list-style-type: none;
            float: left !important;
            margin-right:.5rem;
            margin-left:.5rem;
            display: list-item;
            text-align: -webkit-match-parent;
            font-family:${unsafeCSS(stylesProps.fontFamily)};
            padding:${unsafeCSS(stylesProps.padding)};
            line-height: ${unsafeCSS(stylesProps.lineHeight)};
            font-size:${unsafeCSS(stylesProps.fontSize)};
  }
  ${btnCSS};`;
  }
  @property()

  render() {
    return html`
      <button>
      <slot></slot>
      <bolder-ripple></bolder-ripple>
      </button>
    `;
  }
}
export default NavbarItem;