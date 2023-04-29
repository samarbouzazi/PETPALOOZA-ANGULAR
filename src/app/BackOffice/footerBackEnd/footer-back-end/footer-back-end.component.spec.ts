import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBackEndComponent } from './footer-back-end.component';

describe('FooterBackEndComponent', () => {
  let component: FooterBackEndComponent;
  let fixture: ComponentFixture<FooterBackEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBackEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
