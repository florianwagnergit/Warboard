import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSelectionMenuComponent } from './player-selection-menu.component';

describe('PlayerSelectionMenuComponent', () => {
  let component: PlayerSelectionMenuComponent;
  let fixture: ComponentFixture<PlayerSelectionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSelectionMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSelectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
