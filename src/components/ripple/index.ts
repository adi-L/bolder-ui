import { customElement, property } from 'lit/decorators.js';
import { LitElement, html, css } from 'lit';
const tinycolor = require("tinycolor2");

@customElement(`ripple-bolder`)
class Ripple extends LitElement {

  constructor() {
    super();
    this.addEventListener('click', ({ clientX, clientY }) => {
      debugger
      let _bgColor = this.color;
      let _borderRadius = "0";
      if (!this.color && this.firstElementChild) {
        const { backgroundColor, borderRadius } = window.getComputedStyle(this.firstElementChild);
        _bgColor = resloveStyles(backgroundColor);
        _borderRadius = borderRadius;
      }
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;
      const bound = this.getBoundingClientRect();
      const left = `${clientX - bound.x - radius}`;
      const top = `${clientY - bound.top - radius}`;
      const theRipple = document.createElement("span");
      theRipple.style.width = bound.width + "px";
      theRipple.style.height = diameter + "px";
      theRipple.style.animationDuration = this.duration;
      theRipple.style.background = _bgColor;
      this.style.borderRadius = _borderRadius;
      theRipple.style.left = left + "px";
      theRipple.style.top = top + "px";
      if (this.shadowRoot) {
        this.shadowRoot.appendChild(theRipple);
      } else {
        this.appendChild(theRipple);
      }
      setTimeout(() => {
        theRipple.remove();
      }, 600);
    });
  }
  static get styles() {
    return css`
    :host{
      box-sizing: border-box;
      display: inline-block;
      overflow: hidden;
      position:relative;
    }
    span {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-effect 600ms linear;
        -webkit-animation: ripple-effect 600ms linear;
      }
      @-webkit-keyframes ripple-effect {
        to {
          transform: scale(4);
          opacity: 1;
        }
      }
      @keyframes ripple-effect {
        75% {
          transform: scale(4);
          opacity: 1;
        }
        100%{
          transform: scale(5);
          opacity: 0;
        }
        
  }`;
  }
  @property()
  color = "";
  duration = "600ms";
  render() {
    return html`<slot />`;
  }
}
function resloveStyles(bgColor: string) {
  const color = tinycolor(bgColor);
  const rippleColorHsl = color.toHsl();
  rippleColorHsl.a = rippleColorHsl.a + .1;
  const rippleColor = tinycolor(rippleColorHsl).toHslString();
  return rippleColor;
}
export default Ripple;