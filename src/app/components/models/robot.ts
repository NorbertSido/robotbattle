export class Robot {
    id: number;
    name: string;
    type: string;
    strength: number;

    constructor(id: number, name: string, type: string, strength: number) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.strength = strength
    }
}