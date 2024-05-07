import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Robot } from '../../models/robot';

@Component({
  selector: 'app-robot-add',
  templateUrl: './robot-add.component.html',
  styleUrl: './robot-add.component.css'
})
export class RobotAddComponent {
  newRobotForm: FormGroup;
  types = [
    { value: '1', label: 'brawler' },
    { value: '2', label: 'rouge' },
    { value: '3', label: 'assault' },
  ];

  constructor() {
    // Form validálása
    this.newRobotForm = new FormGroup({
      robotName: new FormControl('', [Validators.required]),
      robotType: new FormControl(null, [Validators.required]),
      robotStr: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)])
    });
  }
  get robotName() { return this.newRobotForm.get('robotName') };
  get robotType() { return this.newRobotForm.get('robotType') };
  get robotStr() { return this.newRobotForm.get('robotStr') };

  submit() { }
}
