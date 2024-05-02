import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RobotListComponent } from './components/CRUD/robot-list/robot-list.component';
import { RobotEditComponent } from './components/CRUD/robot-edit/robot-edit.component';
import { RobotAddComponent } from './components/CRUD/robot-add/robot-add.component';
import { BattleComponent } from './components/battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RobotListComponent,
    RobotEditComponent,
    RobotAddComponent,
    BattleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
