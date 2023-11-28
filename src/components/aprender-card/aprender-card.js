class AprenderCard extends HTMLElement {
    constructor() {
        super()
        this.nameCourse = this.getAttribute('nameCourse');
        this.resTime = this.getAttribute('resTime');

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
        <link rel="stylesheet" href="../components/aprender-card/style.scss">

        <div class="aprender-card">
            <div class="icono-medalla">
                <img class="imgAprender" src="/icons/medalla-blanco-morada.svg">
            </div>

    
        <div class="texto-aprender">
            <a href="/curso/" class="nameCourse">${this.nameCourse}</a>
            <p class="resTime">${this.resTime}</p>
        </div>
</div>

    <hr style="
   width: 320px;
    margin-left: 2px;
    margin-top: 0px;
    color: #c4c5c6;
    height: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    ">


</div>
        `;
    }

}

customElements.define('aprender-card', AprenderCard)
export default AprenderCard;
