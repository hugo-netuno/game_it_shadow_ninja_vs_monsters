function interactShuriken(heroSelection,monsterAtribute){
if(heroSelection>monsterAtribute){
this._gameStatus++;

if(this._gameStatus<3 && this._gameStatus>0){
return `<p> ${this.heroInstance._name}
 hits monster with sharp shurikens!</p>`;
    }

else if(this._gameStatus===3){
return `<p> ${this.heroInstance._name}
 kills monster with sharp shurikens!</p>`;
}
}
else if(heroSelection<=monsterAtribute){
this._gameStatus = 0;
return `<p> The monster evades the thrown shurikens and escapes! </p>`;
}
}


_fiat(){
this.heroLoader(1);
this._data.updateDate(
    this.interactShuriken(
    this.heroInstance.shuriken(),
    this.monsterInstance.def));
this.checkGameStatus();
    }
    
checkGameStatus(){
if(this._gameStatus===3){
    alert("VICTORY!!! The monster was slayed...");
} else if(this._gameStatus===0){
    alert("DRAW! The monster fled...");
} else if(this._gameStatus===-1){
    alert("DEFEAT! The ${heroInstance._name} drops dead...") ;
}
window.location.reload(false);
}