class HistorialCard extends HTMLElement {
    constructor() {
        super()
        this.semana = this.getAttribute('semana');
        this.pointsExp = this.getAttribute('pointsExp');

    }

    static get observedAttributes() {
        return []; 
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render()
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../components/historial-card/style.scss">

        <div class="historial-card">
                <div class="promedio-semana">
                    <h4 class="promedio">Promedio</h4>
                    <p class="semana">${this.semana}</p>
                </div>
            
                <div class="punticos">
                    <h2 class="pointsExp">${this.pointsExp}</h2>
                </div>

        </div>
        `;
    }

}

customElements.define('historial-card', HistorialCard)
export default HistorialCard;
