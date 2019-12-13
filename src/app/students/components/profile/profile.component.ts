import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  providers: [StudentService]
})
export class ProfileComponent implements OnInit {
  public tabs: any[];
  public student: Student;
  public loading: boolean = true;

  constructor(
    private _studentService: StudentService,
    private _router: Router
  ) {
    this.tabs = [
      {
        title: 'GENERALES',
        status: true,
        styles: 'active'
      },
      {
        title: 'DOMICILIO',
        status: false,
        styles: ''
      },
      {
        title: 'ESCOLARES',
        status: false,
        styles: ''
      },
      // {
      //   title: 'DATOS SOCIO-ECONÓMICOS',
      //   status: false,
      //   styles: ''
      // }
    ]
  }

  ngOnInit() {
    this.loadStudent();
  }

  showtab(index: number) {
    for (const tab of this.tabs) {
      tab.status = false;
      tab.styles = '';
    }
    this.tabs[index].status = true;
    this.tabs[index].styles = 'active';
  }

  loadStudent() {
    this._studentService.getInfo().subscribe(
      response => {
        if(response.status == 'success') {
          this.student = response.student;
          console.log(this.student);
          this.loading = false;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
