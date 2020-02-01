import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesListPage } from './files-list.page';

describe('FilesListPage', () => {
  let component: FilesListPage;
  let fixture: ComponentFixture<FilesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
