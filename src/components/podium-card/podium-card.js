class PodiumCard extends HTMLElement {
    constructor() {
        super()
        this.number = this.getAttribute('number');
        this.img = this.getAttribute('img');
        this.name = this.getAttribute('name');
        this.bar = this.getAttribute('bar');
        this.points = this.getAttribute('points')
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
        <link rel="stylesheet" href="../components/podium-card/style.scss">

<div class="podium-card">
    <div class="number">
        <h4 class= "number-position">${this.number}</h4>
        <img class="photo" src="${this.img}"/>
    </div>
    <div class="photo-name">
        
        <p class= "name">${this.name}</p>
    </div>
    <div class="puntuacion">
        <h6 class= "points">${this.points}</h6>
    </div>

</div>
        `;
    }

}

customElements.define('podium-card', PodiumCard)
export default PodiumCard;
