import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishmenuComponent } from './fishmenu.component';

describe('FishmenuComponent', () => {
  let component: FishmenuComponent;
  let fixture: ComponentFixture<FishmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
