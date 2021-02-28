import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { PlayerSelectionMenuComponent } from './player-selection-menu/player-selection-menu.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: StartMenuComponent},
      {path: 'player-selection', component: PlayerSelectionMenuComponent},
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


