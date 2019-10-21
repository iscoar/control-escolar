import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDocumentsComponent } from './teacher-documents.component';

describe('TeacherDocumentsComponent', () => {
  let component: TeacherDocumentsComponent;
  let fixture: ComponentFixture<TeacherDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
