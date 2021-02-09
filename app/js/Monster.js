class Monster {
    constructor(number){
        switch (number) {
            case 1:
                return {
                    lvl: 8,
                    element: "water",
                    type: "wyrm",
                    atk: 2900,
                    def: 2900
                };
            case 2:
                return {
                    lvl: 4,
                    element:"dark",
                    type: "zombie",
                    atk: 1200,
                    def: 1200
                };
            case 3:
                return {
                    lvl: 4,
                    element: "wind",
                    type: "machine",
                    atk: 1400,
                    def: 1200
                };
            case 4:
                return {
                    lvl: 7,
                    element: "dark",
                    type: "spellcaster",
                    atk: 2500,
                    def: 2100
                };
            case 5:
                return {
                    lvl: 5,
                    element: "earth",
                    type: "beast",
                    atk: 1350,
                    def: 1600
                };
            case 6:
                return {
                    lvl: 4,
                    element: "dark",
                    type: "warrior",
                    atk: 1800,
                    def: 1500
                };
            default:
                console.log(alert("error"));
        }
    }
}