import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderimagesComponent } from './sliderimages.component';

describe('SliderimagesComponent', () => {
  let component: SliderimagesComponent;
  let fixture: ComponentFixture<SliderimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderimagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
