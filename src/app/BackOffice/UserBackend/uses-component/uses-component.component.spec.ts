import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsesComponentComponent } from './uses-component.component';

describe('UsesComponentComponent', () => {
  let component: UsesComponentComponent;
  let fixture: ComponentFixture<UsesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
