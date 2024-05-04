import { Component } from '@angular/core';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrl: './robot-list.component.css'
})
export class RobotListComponent {
  robotList = [
    { "id": 1, "name": "Titan", "type": "brawler", "strength": 95 },
    { "id": 2, "name": "Shadow", "type": "rouge", "strength": 80 },
    { "id": 3, "name": "Rampage", "type": "assault", "strength": 90 },
    { "id": 4, "name": "Blaze", "type": "brawler", "strength": 88 },
    { "id": 5, "name": "Viper", "type": "rouge", "strength": 82 },
    { "id": 6, "name": "Warrior", "type": "assault", "strength": 93 },
    { "id": 7, "name": "Ironclad", "type": "brawler", "strength": 97 },
    { "id": 8, "name": "Spectre", "type": "rouge", "strength": 85 },
    { "id": 9, "name": "Thunder", "type": "assault", "strength": 91 },
    { "id": 10, "name": "Crusher", "type": "brawler", "strength": 96 },
    { "id": 11, "name": "Phantom", "type": "rouge", "strength": 83 },
    { "id": 12, "name": "Dominion", "type": "assault", "strength": 89 },
    { "id": 13, "name": "Colossus", "type": "brawler", "strength": 98 },
    { "id": 14, "name": "Stealth", "type": "rouge", "strength": 84 },
    { "id": 15, "name": "Thunderbolt", "type": "assault", "strength": 92 },
    { "id": 16, "name": "Juggernaut", "type": "brawler", "strength": 99 },
    { "id": 17, "name": "Shade", "type": "rouge", "strength": 86 },
    { "id": 18, "name": "Annihilator", "type": "assault", "strength": 94 },
    { "id": 19, "name": "Goliath", "type": "brawler", "strength": 100 },
    { "id": 20, "name": "Infiltrator", "type": "rouge", "strength": 87 }
  ];
}
