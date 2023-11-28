class CourseCard extends HTMLElement {
    constructor() {
        super()
        this.type = this.getAttribute('type');
        this.title = this.getAttribute('title');
        this.time = this.getAttribute('time');
        this.add = this.getAttribute('add');
        this.percent = this.getAttribute('percent');
       this.progress = this.getAttribute('progress');
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
        <link rel="stylesheet" href="../components/course-card/style.scss">
        <div class="course-card">
    
        <div class="icon">
            ${this.changeIcon(this.type)}
        </div>

    <div class= informacion>
        <div class="information">
            <h4 class= "course-name">${this.title}</h4>
            
            <div class="time-star">
                
                <p class= "course-time">${this.time}</p>
                <img class="star" src="/icons/star.svg"/>
            </div>

        </div>

      <div class="card-body">
      <hr style="
    width: 182px;
    margin-left: 8px;
    margin-top: -11px;
    color: #c4c5c6;
    height: 1px;">

<div class="text">
      <p class="course-percent" style="
    color: #454545;
    font-weight: 500;
    font-size: 11px;"
    >${this.percent}</p>     
      
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: ${this.progress}"></div>
</div>
</div>
</div>

      </div>
    </div>
  </div>
</div>

        </div>
        `;
    }

    changeIcon(type) {
        let result;
        switch (type) {
            case 'medalla':
                    result = `<img class="medalla" src="/icons/medalla-icon.svg"/>`
                break;
            case 'candado':
                    result = `<img class="candado" src="/icons/candado.svg"/>`
                break;
            case 'lista':
                    result = `<img class="lista" src="/icons/lista.svg"/>`
                break;
            default:
                break;
        }
        return result;
    }


    changeStatus() {
        if (add.on("click")) {
            return  `<img class="añadido" src="/icons/star.svg"/>`
           } else {
                    `<img class="añadido" src="/icons/star2.svg"/>`          }
    }
}

customElements.define('course-card', CourseCard)
export default CourseCard;
