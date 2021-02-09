class Hero {
        constructor(id,name){
            this._id = id;
            this._name = name;
        }
        shuriken(){
            return Math.floor((Math.random() * 3000) + 1);
        }
        transform(){
            return 4;
        }
        ninjutsu(){
            return "dark";
        }
        sword(){
            return Math.floor((Math.random() * 4000) + 1);
        }
}