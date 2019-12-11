import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-subjects',
  templateUrl: './group-subjects.component.html',
  styleUrls: ['./group-subjects.component.sass']
})
export class GroupSubjectsComponent implements OnInit {
  public items: any[];
  public assetsUrl: string;
  public subjects: any[];

  constructor(
    private _teacherService: TeacherService,
    public _route: ActivatedRoute
  ) {
    this.assetsUrl = 'assets/img/Iconos/';
    this.items = [];
  }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects() {
    this._route.params.subscribe(
      params => {
        this._teacherService.groupSubjects(params['name']).subscribe(
          response => {
            if (response.status == 'success') {
              this.subjects = response.subjects;
              this.subjects.forEach(subject => {
                let item = {
                  id: subject.id,
                  title: subject.name,
                  icon: 'Profesor/subject.png',
                  color: 'ce-subjects',
                  url: '/grupo/'+params['name']+'/materia/'+subject.id
                };
                this.items.push(item);
              });
            }
            console.log(this.items);
          }
        );
      }
    )
  }

}
