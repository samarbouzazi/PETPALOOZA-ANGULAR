import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalBackComponent } from './add-animal-back.component';

describe('AddAnimalBackComponent', () => {
  let component: AddAnimalBackComponent;
  let fixture: ComponentFixture<AddAnimalBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnimalBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnimalBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
