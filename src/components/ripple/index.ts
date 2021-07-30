import { customElement, property } from 'lit/decorators.js';
import { LitElement, html, css } from 'lit';

@customElement(`ripple-bolder`)
class Ripple extends LitElement {

  constructor() {
    super();
    this.addEventListener('click', ({ clientX, clientY }) => {
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;
      debugger
      if(!this.parentElement) return;
      // this.width = this.height = `${diameter}px`;
      const bound = this.parentElement.getBoundingClientRect();
      const left = `${clientX - bound.x - radius}`;
      const top = `${clientY - bound.top - radius}`;
      const theRipple = document.createElement("span");
      theRipple.style.width = bound.width + "px";
      theRipple.style.height = bound.height + "px";
      theRipple.style.animationDuration = this.duration;
      theRipple.style.background = this.color;
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
      height:100% ;
      width:100%;
      position: absolute;
      display: inline-block;
      overflow: hidden;
      left: 0;
      top:0;
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
        to {
          transform: scale(4);
          opacity: 1;
        }
  }`;
  }
  @property()
  color = "rgba(226, 221, 221, 0.281)";
  duration = "600ms";
  render() {
    return html`<slot />`;
  }
}
export default Ripple;