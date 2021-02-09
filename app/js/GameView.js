class GameView extends View {

    constructor(elemento) {
        super(elemento);
    }

    templateHero(model) {

        return `
        <img src="./app/img/heros/${model}.png"
        width="150" height="150" />
        `;
    }
    templateMonster(model) {
        
        return `
        <img src="./app/img/monsters/${model}Monster.png"
        width="350" height="500" />
        `;
    }
    templateData(model) {

        return `
        ${model}
        `
    }

}