import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorshipsReportComponent } from './mentorships-report.component';

describe('MentorshipsReportComponent', () => {
  let component: MentorshipsReportComponent;
  let fixture: ComponentFixture<MentorshipsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorshipsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorshipsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
