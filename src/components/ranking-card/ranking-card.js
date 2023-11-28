class RankingCard extends HTMLElement {
    constructor() {
        super()
        this.rankingPosition = this.getAttribute('rankingPosition');
        this.imgProfile = this.getAttribute('imgProfile');
        this.nameProfile = this.getAttribute('nameProfile');
        this.rankingPoints = this.getAttribute('rankingPoints');
        this.advancePercent = this.getAttribute('advancePercent')
        this.advanceBar = this.getAttribute('advanceBar')
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
        <link rel="stylesheet" href="../components/ranking-card/style.scss">

<div class="ranking-card">
    <div class="rankingPosition-imgProfile">
        <h4 class= "rankingPosition">${this.rankingPosition}</h4>
        <img class="imgProfile" src="${this.imgProfile}"/>
    </div>

    
    <div class="todo-ranking">
        <div class="name-puntuacion">
            <h4 class= "nameProfile">${this.nameProfile}</h4>
            <p class= "rankingPoints">${this.rankingPoints}</p>
        </div>
    
        <div class="barra-porcentaje">
            <p class= "advancePercent">${this.advancePercent}</p>
            <div id="barra-ranking" class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: ${this.advanceBar}"></div>
        </div>
    </div>

    <hr style="
    width: 320px;
    margin-left: -73px;
    margin-top: 25px;
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

customElements.define('ranking-card', RankingCard)
export default RankingCard;
