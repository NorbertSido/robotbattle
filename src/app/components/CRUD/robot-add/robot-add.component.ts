import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-robot-add',
  templateUrl: './robot-add.component.html',
  styleUrl: './robot-add.component.css'
})
export class RobotAddComponent {
  newRobot: FormGroup;
  types = [
    { value: '1', label: 'brawler' },
    { value: '2', label: 'rouge' },
    { value: '3', label: 'assault' },
  ];

  constructor() {
    this.newRobot = new FormGroup({
      robotName: new FormControl('', [Validators.required]),
      robotType: new FormControl(null, [Validators.required]),
      robotStr: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)])
    });
  }

  get robotName() { return this.newRobot.get('robotName') };
  get robotType() { return this.newRobot.get('robotType') };
  get robotStr() { return this.newRobot.get('robotStr') };

  submit() { }
}
