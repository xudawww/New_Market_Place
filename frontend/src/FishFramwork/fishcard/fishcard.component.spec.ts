import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishcardComponent } from './fishcard.component';

describe('FishcardComponent', () => {
  let component: FishcardComponent;
  let fixture: ComponentFixture<FishcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
