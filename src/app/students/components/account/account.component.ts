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
          this.payments = response.payments;
          this.totalmount();
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

}
