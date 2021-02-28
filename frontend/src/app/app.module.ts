import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldComponent } from './board/field/field.component';
import { BoardComponent } from './board/board.component';
import { HeroComponent } from './board/field/hero/hero.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { PlayerCardComponent } from './player-selection-menu/player-card/player-card.component';
import { ControlMenuComponent } from './board/control-menu/control-menu.component';
import { SkillbarComponent } from './board/skillbar/skillbar.component';
import { SkillComponent } from './board/skillbar/skill/skill.component';
import { PlayerSelectionMenuComponent } from './player-selection-menu/player-selection-menu.component';
import { ForeignPlayerCardComponent } from './player-selection-menu/foreign-player-card/foreign-player-card.component';

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
    SkillComponent,
    PlayerSelectionMenuComponent,
    ForeignPlayerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
