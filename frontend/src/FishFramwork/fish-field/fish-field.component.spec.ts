import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishFieldComponent } from './fish-field.component';

describe('FishFieldComponent', () => {
  let component: FishFieldComponent;
  let fixture: ComponentFixture<FishFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
