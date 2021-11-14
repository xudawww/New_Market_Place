import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishModalFrameComponent } from './fish-modal-frame.component';

describe('FishModalFrameComponent', () => {
  let component: FishModalFrameComponent;
  let fixture: ComponentFixture<FishModalFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishModalFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishModalFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
