import { customElement, property } from 'lit/decorators.js';
import { LitElement, html, css, unsafeCSS } from 'lit';
import theme from '../../theme';


 export class Input extends LitElement {
   static get properties() {
     return {
       type: String,
       autocomplete: String,
       value: String,
       name: String,
       id:String,
       fullWidth:Boolean,
       style:String
     }
   }
   static get styles() {
    const stylesProps = theme.input.props;
    return css`
input{
box-sizing: border-box;
width: 100%;
min-width: 0px;
outline: transparent solid 2px;
outline-offset: 2px;
position: relative;
appearance: none;
transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;
font-size:${unsafeCSS(stylesProps.fontSize)};
padding-inline-start: 0;
padding-inline-end: 0;
font-family:${unsafeCSS(stylesProps.fontFamily)};
height: ${unsafeCSS(stylesProps.height)};
border-radius: ${unsafeCSS(stylesProps.borderRadius)};
border-width: 1px;
border-style: solid;
border-image: initial;
border-color: inherit;
background: inherit;
overflow: visible;
}
input:focus{
border-color: #2C73D2;
outline: 0;
box-shadow: 0 0 0 0.05rem #2C73D2;
}
`;
}
   constructor() {
     super();
     if (this.value == undefined) {
       this.value = '';
     }
   }
   setValue(event) {
    if (!event || !event.target) return;
    const value = event.target.value;
    this.value = value;
}
   render() {
     return html`
         <input style=${this.style} .value=${this.value} @input=${this.setValue} name=${this.name} id=${this.id} placeholder=" " type="${this.type}" autocomplete="${this.autocomplete}">
    `;
   }
 }
 
 customElements.define('bolder-input', Input);
