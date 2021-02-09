class View {
    
    constructor(elemento) {
        
        this._elemento = elemento;
    }
    
    template() {
        
        throw new Error('O método template deve ser implementado');
    }
    
    updateHero(model) {
        
        this._elemento.innerHTML = this.templateHero(model);
    }
    updateMonster(model) {
        
        this._elemento.innerHTML = this.templateMonster(model);
    }
    updateData(model) {
        
        this._elemento.innerHTML = this.templateData(model);
    }
}