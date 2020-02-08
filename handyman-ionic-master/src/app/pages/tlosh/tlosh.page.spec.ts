import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TloshPage } from './tlosh.page';

describe('TloshPage', () => {
  let component: TloshPage;
  let fixture: ComponentFixture<TloshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TloshPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TloshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
