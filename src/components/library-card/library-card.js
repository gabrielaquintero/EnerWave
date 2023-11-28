class LibraryCard extends HTMLElement {
    constructor() {
        super()
        this.type = this.getAttribute('type');
        this.title = this.getAttribute('title');
        this.date = this.getAttribute('date');
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
        <link rel="stylesheet" href="../components/library-card/styles.scss">
        <div class="library-card">
            ${this.changeIcon(this.type)}
            <h3>${this.title}</h3>
            <p>${this.date}</p>
        </div>
        `;
    }

    changeIcon(type) {
        let result;
        switch (type) {
            case 'manuals':
                    result = `<img class="manuals" src="/icons/manuals-icon.svg"/>`
                break;
            case 'guides':
                    result = `<img class="guides" src="/icons/guide-icon.svg"/>`
                break;
            case 'policies':
                    result = `<img class="policies" src="/icons/policies-icon.svg"/>`
                break;
            default:
                break;
        }
        return result;
    }
}

customElements.define('library-card', LibraryCard)
export default TopBar;