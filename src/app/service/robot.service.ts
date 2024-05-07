import { Injectable } from '@angular/core';
import { Robot } from '../models/robot';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RobotService {
  baseUrl = 'http//localhost:3000/data';

  constructor(private http: HttpClient) {}

  // Adatok lekérdezése
  getData() {
    return this.http.get<any>(this.baseUrl).pipe(
      map((response) => {
        let temp: Robot[] = [];

        for (let i = 0; i < response.data.length; i++) {
          let robot = new Robot(
            response.data[i].id,
            response.data[i].name,
            response.data[i].type,
            response.data[i].strength
          );
          temp.push(robot);
        }
        return temp;
      })
    );
  }

  // Új Robot hozzáadása
  createRobot(newRobot: Robot) {}
}
