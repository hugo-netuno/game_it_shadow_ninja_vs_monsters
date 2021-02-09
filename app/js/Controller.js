function Controller(){
    return {
        _heroZone: new GameView(document.querySelector("#hero")),
        _monsterZone: new GameView(document.querySelector("#monster")),
        _data: new GameView(document.querySelector("#data")),
        _startButton: document.querySelector("#startButton"),
        _gameStatusFlee: 0,
        _gameStatusHit: 0,
        _gameStatusLife: 0,
        monsterInstance: null,
        heroInstance: null,
        shurikenReader: document.querySelector("#shuriken"),
        transformReader: document.querySelector("#transform"),
        ninjutsuReader: document.querySelector("#ninjutsu"),
        swordReader: document.querySelector("#sword"),

        heroLoader(model){
            this._heroZone.updateHero(model);
            this.heroInstance = new Hero("1","Black Ninja");
        },
        monsterLoader(){
            let number = 0;
            number = Math.floor((Math.random() * 6) + 1);
            this._startButton.classList.add("invisible");
            this._monsterZone.updateMonster(number);
            this.monsterInstance = new Monster(number);
            console.log(this.monsterInstance);
            this.initiateChiReader(this.monsterInstance);
        },
        
        interactShuriken(heroSelection,monsterAtribute){
            if(heroSelection>monsterAtribute){
            this._gameStatusHit++;
            if(this._gameStatusHit<3 && this._gameStatusHit>0){
            return `<p> ${this.heroInstance._name}
             hits monster with sharp shurikens!</p>`;
                }
            
            else if(this._gameStatusHit===3){
            return `<p> ${this.heroInstance._name}
             kills monster with sharp shurikens!</p>`;
            }
            }
            else if(heroSelection<=monsterAtribute){
            this._gameStatusFlee++;
            return `<p> The monster evades the thrown shurikens! </p>`;
            }
            },            
            
        interactTransform(heroSelection,dragonPower,monsterAtribute){
            if(monsterAtribute>heroSelection){
                return `<p> ${this.heroInstance._name} can not transform into dragon! </p>`;
            } else {
                this.transformState = true;
                if(dragonPower>this.monsterInstance.def){
                this._gameStatusHit = 3;
                return `<p>${this.heroInstance._name}
                 transforms himself into a dragon and eats the monster!</p>`;
                } else {
                    return `${this.heroInstance._name} transforms himself into a
                     dragon and fights the monster but
                     couldn't eat it`
                }
            }
        },
        interactNinjutsu(heroSelection,monsterAtribute){
            if(heroSelection===monsterAtribute){
                return `<p> ${this.heroInstance._name} can not ninjutsu escape </p>`;
            } else {
                this._gameStatusFlee = 4;
                this.ninjutsuState = true;
                return `<p> escapes in the darkness </p>`;
            }
        },
        interactSword(heroSelection,monsterAtribute){
            
            if(heroSelection>monsterAtribute){
                this._gameStatusHit++;
                if(this._gameStatusHit<3 && this._gameStatusHit>0){
                return `<p> ${this.heroInstance._name}
                 hits monster with a sword blast!</p>`;
                    }
                else if(this._gameStatusHit===3){
                return `<p> ${this.heroInstance._name}
                 destroys monster with sword blasts</p>`;
                }
            } else if(heroSelection<=monsterAtribute){
                this._gameStatusLife++;
                return `<p> the monster counter attack damaging
                 ${this.heroInstance._name}! </p>`;
                }
        },

        _fiatShuriken(){
            this._heroZone.updateHero(1);
            this._data.updateData(
                this.interactShuriken(
                this.heroInstance.shuriken(),
                this.monsterInstance.def));
            this.checkGameStatus();
        },
        _fiatTransform(){
            let dragonPower = this.heroInstance.shuriken()+this.heroInstance.sword();
            this._data.updateData(
                this.interactTransform(
                this.heroInstance.transform(),
                dragonPower,
                this.monsterInstance.lvl));
                this.transformTest(this.monsterInstance.lvl);
                this.checkGameStatus();
        },
        _fiatNinjutsu(){
            this._data.updateData(
                this.interactNinjutsu(
                    this.heroInstance.ninjutsu(),
                    this.monsterInstance.element));
                this.ninjutsuTest(this.monsterInstance.element);
                this.checkGameStatus();
        },
        _fiatSword(){
            this._heroZone.updateHero(4);
            this._data.updateData(
                this.interactSword(
                    this.heroInstance.sword(),
                    this.monsterInstance.atk));
                this.checkGameStatus();
        },
        
            reader(){
                if(this._gameStatusHit===1 && this._gameStatusFlee===0){
                    if(this._gameStatusLife===0){
                        this.swordReader.innerHTML = '<img src="./app/img/flags/13.png" />';
                    } else if(this._gameStatusLife===1){
                        this.swordReader.innerHTML = '<img src="./app/img/flags/14.png" />';
                    }
                    this.shurikenReader.innerHTML = '<img src="./app/img/flags/7.png" />';
                } 
                
                else if(this._gameStatusHit===1 && this._gameStatusFlee===1){
                    if(this._gameStatusLife===0){
                        this.swordReader.innerHTML = '<img src="./app/img/flags/13.png" />';
                    } else if(this._gameStatusLife===1){
                        this.swordReader.innerHTML = '<img src="./app/img/flags/14.png" />';
                    }
                    this.shurikenReader.innerHTML = '<img src="./app/img/flags/9.png" />';
                }
                
                else if(this._gameStatusHit===1 && this._gameStatusFlee===2){
                    if(this._gameStatusLife===0){
                        this.swordReader.innerHTML = '<img src="./app/img/flags/13.png" />';
                    } else if(this._gameStatusLife===1){
                        this.swordReader.innerHTML = '<img src="./app/img/flags/14.png" />';
                    }
                    this.shurikenReader.innerHTML = '<img src="./app/img/flags/5.png" />';
                }

                else if(this._gameStatusHit===2 && this._gameStatusFlee===1){
                    if(this._gameStatusLife===0){
                        this.swordReader.innerHTML = '<img src="./app/img/flags/16.png" />';
                    } else if(this._gameStatusLife===1){
                        this.swordReader.innerHTML = '<img src="./app/img/flags/17.png" />';
                    }
                    this.shurikenReader.innerHTML = '<img src="./app/img/flags/10.png" />';
                }
                
                else if(this._gameStatusHit===2 && this._gameStatusFlee===2){
                    if(this._gameStatusLife===0){
                        this.swordReader.innerHTML = '<img src="./app/img/flags/16.png" />';
                    } else if(this._gameStatusLife===1){
                        this.swordReader.innerHTML = '<img src="./app/img/flags/17.png" />';
                    }
                    this.shurikenReader.innerHTML = '<img src="./app/img/flags/6.png" />';
                }
                
                else if(this._gameStatusHit===2 && this._gameStatusFlee===0){
                    if(this._gameStatusLife===0){
                        this.swordReader.innerHTML = '<img src="./app/img/flags/16.png" />';
                    } else if(this._gameStatusLife===1){
                        this.swordReader.innerHTML = '<img src="./app/img/flags/17.png" />';
                    }
                    this.shurikenReader.innerHTML = '<img src="./app/img/flags/8.png" />';
                }
                
                else if(this._gameStatusHit===0 && this._gameStatusFlee===1){
                    this.shurikenReader.innerHTML = '<img src="./app/img/flags/3.png" />';
                }
                
                else if(this._gameStatusHit===0 && this._gameStatusFlee===2){
                    if(this._gameStatusLife===1){
                        this.swordReader.innerHTML = '<img src="./app/img/flags/12.png" />';
                    }
                    this.shurikenReader.innerHTML = '<img src="./app/img/flags/4.png" />';
                }

                else if(this._gameStatusHit===0 && this._gameStatusLife===1){
                    this.swordReader.innerHTML = '<img src="./app/img/flags/12.png" />';
                }
            },
        
            checkGameStatus(){
                this.reader();
            if(this._gameStatusHit===3){
                alert("VICTORY!!! The monster was slayed...");
            } else if(this._gameStatusFlee=== 3){
                alert("DRAW! The monster fled...");
            } else if(this._gameStatusFlee=== 4){
                alert("DRAW! You fled into the shadows...");
            } else if(this._gameStatusLife===2){
                this._heroZone.updateHero(6);
                alert("DEFEAT! The ninja drops dead...") ;
            }
            if(this._gameStatusFlee===3 ||
                    this._gameStatusFlee===4 ||
                    this._gameStatusHit === 3 ||
                    this._gameStatusLife === 2){
                setTimeout(window.location.reload(false), 3000);
        }
            },
        ninjutsuTest(element){
            if(element==="dark"){this.heroLoader(5)}else{this.heroLoader(3);}
        },
        transformTest(lvl){
            if(lvl>4){this.heroLoader(5)}else{this.heroLoader(2);}
        },
        initiateChiReader(mon){

            this.shurikenReader.innerHTML = '<img src="./app/img/flags/2.png" />';
            if(mon.lvl>4){
                this.transformReader.innerHTML = '<img src="./app/img/flags/19.png" />';
            } else {
            this.transformReader.innerHTML = '<img src="./app/img/flags/1.png" />';
            }
            if(mon.element==="dark"){
                this.ninjutsuReader.innerHTML = '<img src="./app/img/flags/19.png" />';   
            } else {
            this.ninjutsuReader.innerHTML = '<img src="./app/img/flags/18.png" />';
            }
            this.swordReader.innerHTML = '<img src="./app/img/flags/11.png" />';
        }
    };
}