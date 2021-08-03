import { customElement, property } from 'lit/decorators.js';
import { LitElement, html } from 'lit';
import '../exports/button';
import '../exports/input';
import '../exports/navbar';
import './components/navItem';

@customElement('main-component')
class MyElement extends LitElement {
    constructor(){
        super();
    }
    @property()
    version = 'STARTING';
    onChange= (event:any)=>{
        const target = event.target;
        console.log(target.value)
    }
    render() {
        return html`
        <bolder-navbar >
            <bolder-nav-item>
                help
            </bolder-nav-item>
            <bolder-nav-item>
                test
            </bolder-nav-item>
        </bolder-navbar>
        <bolder-navbar>
            <bolder-nav-item>
                help
            </bolder-nav-item>
            <bolder-nav-item>
                test
            </bolder-nav-item>
        </bolder-navbar>
<div>
    <br/>
    <br/>
    <br/>
    <br/><br/>
<bolder-button fullWidth="true">
    HELP
</bolder-button>
<bolder-input    value='test' name="adi" @input=${this.onChange}></bolder-input>
</div>
    `;
    }
}
export default MyElement;