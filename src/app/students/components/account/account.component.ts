import { Component, OnInit } from '@angular/core';
import { StudentService } from './../../services/student.service';
import { Payment } from '../../models/Payment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {
  payments: Payment[];
  total: number;
  fd: any;
  levels: any[] = [];
  cycles: any[] = [];

  constructor(
    public _studentService: StudentService
  ) { }

  ngOnInit() {
    this.loadPayments();
  }

  loadPayments() {
    this._studentService.payments().subscribe(
      response => {
        if (response.status == 'success') {
          console.log(response);
          this.payments = response.payments;
          this.fd = response.final_data;
          this.totalmount();
          this.setLevels();
          this.setCycles();
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  totalmount() {
    this.total = this.payments.reduce((prev, cur) => prev + cur.total, 0);
  }

  setLevels() {
    for (const key in this.fd) {
      if (this.fd.hasOwnProperty(key)) {
        const element = this.fd[key];
        this.levels.push(element.data);
      }
    }
  }

  setCycles() {
    var element;
    for (const key in this.fd) {
      if (this.fd.hasOwnProperty(key)) {
        element = this.fd[key];
        console.log(element.careers);
      }
    }
    for (const key in element.careers) {
      if (element.careers.hasOwnProperty(key)) {
        const carrers = element.careers[key];
        this.cycles.push(carrers.cycles);
      }
    }
    console.log(this.cycles);
  }

}
