import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotAddComponent } from './robot-add.component';

describe('RobotAddComponent', () => {
  let component: RobotAddComponent;
  let fixture: ComponentFixture<RobotAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RobotAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RobotAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
