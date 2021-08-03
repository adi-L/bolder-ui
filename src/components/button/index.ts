//no-missing-import
import { customElement, property } from 'lit/decorators.js';
import { LitElement, html, css, unsafeCSS } from 'lit';
import theme from '../../theme';
import btnCSS from '../../props/button';
const tinycolor = require("tinycolor2");
@customElement(`bolder-button`)
class Button extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    const stylesProps = theme.button.props;
    return css`
    ${btnCSS}
    button{
      background-color:${unsafeCSS(stylesProps.background)};
      border-color:${unsafeCSS(stylesProps.background)};
      font-family:${unsafeCSS(stylesProps.fontFamily)};
      padding:${unsafeCSS(stylesProps.padding)};
      line-height: ${unsafeCSS(stylesProps.lineHeight)};
      font-size:${unsafeCSS(stylesProps.fontSize)};
      border-radius:${unsafeCSS(stylesProps.borderRadius)};
      box-shadow:${unsafeCSS(stylesProps.boxShadow)};
    }
    button:hover{
      box-shadow:${unsafeCSS(stylesProps["&hover"].boxShadow)};
    }
 
  `
  }
  @property()
  hasFocus = "";
  fullWidth = "";
  render() {
    const { bgColor } = resloveStyles();
    return html`
        <button>
        ${this.fullWidth}
        <slot></slot>
        <bolder-ripple></bolder-ripple>
      </button>
      <style>
            button{
              width:${this.fullWidth ? "100%" : "auto"}
            }
            button:hover {
          background-color:${bgColor};
        }
        </style>
 
    `;
  }
}
export default Button;

function resloveStyles() {
  const stylesProps = theme.button.props;
  const color = tinycolor(stylesProps.background);
  const bgColorHsl = color.toHsl();
  bgColorHsl.a = bgColorHsl.a + .1;
  const bgColor = tinycolor(bgColorHsl).toHslString();
  return { bgColor };
}

