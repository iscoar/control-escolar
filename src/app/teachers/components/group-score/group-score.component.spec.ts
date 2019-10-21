import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupScoreComponent } from './group-score.component';

describe('GroupScoreComponent', () => {
  let component: GroupScoreComponent;
  let fixture: ComponentFixture<GroupScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
