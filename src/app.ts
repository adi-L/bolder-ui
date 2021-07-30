import { customElement, property } from 'lit/decorators.js';
import { LitElement, html } from 'lit';

@customElement('main-component')
class MyElement extends LitElement {
    @property()
    version = 'STARTING';

    render() {
        return html`
        <navbar-bolder >
            <nav-item>
                help
            </nav-item>
            <nav-item>
                test
            </nav-item>
        </navbar-bolder>
        <navbar-bolder>
            <nav-item>
                help
            </nav-item>
            <nav-item>
                test
            </nav-item>
        </navbar-bolder>
<div>
    <br/>
    <br/>
    <br/>
    <br/><br/>
<btn-bolder>
    HELP
</btn-bolder>
</div>
    `;
    }
}
export default MyElement;