import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.sass']
})
export class GroupsComponent implements OnInit {
  public items: any[];
  public assetsUrl: string;
  public groups: any[];
  public loading: boolean = true; 

  constructor(
    private _teacherService: TeacherService
  ) {
    this.assetsUrl = 'assets/img/Iconos/';
    this.items = [];
  }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this._teacherService.groups().subscribe(
      response => {
        if (response.status == 'success') {
          this.groups = response.groups;
          this.groups.forEach(group => {
            let item = {
              id: group.id,
              title: group.description,
              icon: 'Profesor/Selección de grupo.png',
              color: 'ce-grupos',
              url: '/grupo/'+group.id+'/materias'
            };
            this.items.push(item);
          });
          this.loading = false;
          console.log(this.items);
        }
      }
    )
  }

}
