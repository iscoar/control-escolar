import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorshipsComponent } from './mentorships.component';

describe('MentorshipsComponent', () => {
  let component: MentorshipsComponent;
  let fixture: ComponentFixture<MentorshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
