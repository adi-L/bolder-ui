import { customElement, property } from 'lit/decorators.js';
import { LitElement, html, css, unsafeCSS } from 'lit';
import theme from '../../theme';
var tinycolor = require("tinycolor2");
@customElement(`btn-bolder`)
class Button extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    const stylesProps = theme.button.props;
    return css`
    button{
      min-height: 10px;
      position: relative;
      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
      background-color:${unsafeCSS(stylesProps.background)};
      font-family:${unsafeCSS(stylesProps.fontFamily)};
      padding:${unsafeCSS(stylesProps.padding)};
      line-height: ${unsafeCSS(stylesProps.lineHeight)};
      font-size:${unsafeCSS(stylesProps.fontSize)};
      border-radius:${unsafeCSS(stylesProps.borderRadius)};
      transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    }
    button:disabled{
     opacity: .3;
  }
  button:focus {
      outline: 0;
  }
  button[type=button]:not(:disabled),
  button[type=reset]:not(:disabled),
  button[type=submit]:not(:disabled),
  button:not(:disabled) {
      cursor: pointer;
  }
  `
  }
  @property()
  fullWidth = false;
  hasFocus = false;

  render() {
    const resolveBg = resloveStyles();
    return html`
      <button>
        <slot></slot>
        <ripple-bolder/>
        <style>
            button:hover {
          background-color:${resolveBg};
        }
        </style>
      </button>
    `;
  }
}
export default Button;

function resloveStyles() {
  const stylesProps = theme.button.props;
  const color = tinycolor(stylesProps.background);
  const hsla = color.toHsl();
  hsla.a = hsla.a + .1;
  const resolveBg = tinycolor(hsla).toHslString();
  return resolveBg;
}

