import { Component, OnInit } from '@angular/core';
import { Robot } from '../../models/robot';
import { RobotService } from '../../../robot.service';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrl: './robot-list.component.css'
})
export class RobotListComponent implements OnInit {
  data: Robot[] = [];

  constructor(private service: RobotService) {}

  ngOnInit(): void {
    this.data = this.service.getData()
  };
}
