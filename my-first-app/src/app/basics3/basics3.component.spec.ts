import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Basics3Component } from './basics3.component';

describe('Basics3Component', () => {
  let component: Basics3Component;
  let fixture: ComponentFixture<Basics3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Basics3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Basics3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
