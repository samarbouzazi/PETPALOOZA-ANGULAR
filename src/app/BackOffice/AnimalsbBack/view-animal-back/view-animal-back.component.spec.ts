import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnimalBackComponent } from './view-animal-back.component';

describe('ViewAnimalBackComponent', () => {
  let component: ViewAnimalBackComponent;
  let fixture: ComponentFixture<ViewAnimalBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAnimalBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAnimalBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
