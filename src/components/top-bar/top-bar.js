class TopBar extends HTMLElement {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return []; 
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../components/top-bar/styles.scss">
        <div id="top-bar">
            <div>
            </div>
            <ul id="top-bar-options">
                <li>
                    <a href="" style="color: #E8710A;">Enerwave</a>
                </li>
                <li>
                    <a href="">Stadium</a>
                </li>
                <li>
                    <a href=""><img src="/icons/odoo-logo.svg" alt=""></a>
                </li>
                <li>
                    <a href=""><img src="/icons/microsoft-teams-logo.svg" alt=""></a>
                </li>
            </ul>
            <div id="top-bar-profile">
                <a href="">
                    <img src="/icons/customize-icon.svg" alt="">
                    <p>Personalizar</p>
                </a>
                <img id="top-bar-profile-img" src="/images/binnacle-profile3.webp" alt="">
            </div>
        </div>
        `;
    }
}

customElements.define('top-bar', TopBar)
export default TopBar;