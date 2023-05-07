import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnimalBackComponent } from './update-animal-back.component';

describe('UpdateAnimalBackComponent', () => {
  let component: UpdateAnimalBackComponent;
  let fixture: ComponentFixture<UpdateAnimalBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAnimalBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAnimalBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
