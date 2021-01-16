import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldComponent } from './board/field/field.component';
import { BoardComponent } from './board/board.component';
import { HeroComponent } from './board/field/hero/hero.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { PlayerCardComponent } from './start-menu/player-card/player-card.component';
import { ControlMenuComponent } from './board/control-menu/control-menu.component';
import { SkillbarComponent } from './board/skillbar/skillbar.component';
import { SkillComponent } from './board/skillbar/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    BoardComponent,
    HeroComponent,
    StartMenuComponent,
    PlayerCardComponent,
    ControlMenuComponent,
    SkillbarComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
