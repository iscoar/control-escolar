import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSubjectsComponent } from './group-subjects.component';

describe('GroupSubjectsComponent', () => {
  let component: GroupSubjectsComponent;
  let fixture: ComponentFixture<GroupSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
