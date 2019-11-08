import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorshipsCanalizeComponent } from './mentorships-canalize.component';

describe('MentorshipsCanalizeComponent', () => {
  let component: MentorshipsCanalizeComponent;
  let fixture: ComponentFixture<MentorshipsCanalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorshipsCanalizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorshipsCanalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
