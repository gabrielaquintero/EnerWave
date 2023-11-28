class NavBar extends HTMLElement {
    constructor() {
        super()
        this.status = this.getAttribute('status');
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
        <link rel="stylesheet" href="../components/nav-bar/styles.scss">
        <div id="nav-bar">
            <div id="nav-bar-enerwave">
                <img id="enerwave-logo" src="/icons/enerwave-logo.svg" alt="">
                <div>
                    ${this.changeIcon(this.status)}
                </div>
            </div>
            <img src="/icons/enerbit-logo.svg" alt="">
        </div>
        `;
    }

    changeIcon(status) {
        let result = ''
        switch (status) {
            case 'home':
                result = `
                    <a id="active" href="./">
                        <img src="/icons/home-active.svg" alt="">
                        <p>Inicio</p>
                    </a>
                    <a href="/library/">
                        <img src="/icons/library-inactive.svg" alt="">
                        <p>Biblioteca</p>
                    </a>
                    <a href="../learning/">
                        <img src="/icons/learning-inactive.svg" alt="">
                        <p>Aprendizaje</p>
                    </a>
                `
                break;
            case 'library':
                result = `
                    <a href="/home/">
                        <img src="/icons/home-inactive.svg" alt="">
                        <p>Inicio</p>
                    </a>
                    <a id="active" href="./">
                        <img src="/icons/library-active.svg" alt="">
                        <p>Biblioteca</p>
                    </a>
                    <a href="/learning/">
                        <img src="/icons/learning-inactive.svg" alt="">
                        <p>Aprendizaje</p>
                    </a>
                `
                break;
            case 'learning':
                result = `
                    <a href="/home/">
                        <img src="/icons/home-inactive.svg" alt="">
                        <p>Inicio</p>
                    </a>
                    <a href="/library/">
                        <img src="/icons/library-inactive.svg" alt="">
                        <p>Biblioteca</p>
                    </a>
                    <a id="active" href="./">
                        <img src="/icons/learning-active.svg" alt="">
                        <p>Aprendizaje</p>
                    </a>
                `
                break;
            default:
                break;
        }
        return result;
    }
}

customElements.define('nav-bar', NavBar)
export default NavBar;