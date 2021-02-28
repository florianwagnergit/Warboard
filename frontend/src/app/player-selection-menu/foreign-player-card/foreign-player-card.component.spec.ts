import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignPlayerCardComponent } from './foreign-player-card.component';

describe('ForeignPlayerCardComponent', () => {
  let component: ForeignPlayerCardComponent;
  let fixture: ComponentFixture<ForeignPlayerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignPlayerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignPlayerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
