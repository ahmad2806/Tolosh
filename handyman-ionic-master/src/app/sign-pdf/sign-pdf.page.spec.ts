import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignPdfPage } from './sign-pdf.page';

describe('SignPdfPage', () => {
  let component: SignPdfPage;
  let fixture: ComponentFixture<SignPdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignPdfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
