import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarboardChatComponent } from './warboard-chat.component';

describe('WarboardChatComponent', () => {
  let component: WarboardChatComponent;
  let fixture: ComponentFixture<WarboardChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarboardChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarboardChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
