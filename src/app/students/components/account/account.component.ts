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
  levelId: any;
  cycleId: number;
  public loading: boolean = true;

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
          this.fd = response.data;
          this.totalmount();
          this.setLevels();
          this.setCycles();
          this.loading = false;
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
    for (const key in this.fd.levels) {
      if (this.fd.levels.hasOwnProperty(key)) {
        const element = this.fd.levels[key];
        this.levels.push(element);
      }
    }
  }

  setCycles() {
    for (const key in this.fd.cycles) {
      if (this.fd.cycles.hasOwnProperty(key)) {
        const element = this.fd.cycles[key];
        this.cycles.push(element);
      }
    }
    console.log(this.cycles);
  }

  levelChanged(level_id: number) {
    this._studentService.payments_by_level(level_id).subscribe(
      response => {
        this.payments = response.payments;
        this.fd.cycles = response.data.cycles;
        this.totalmount();
        this.setLevels();
      },
      error => {
        console.log(error);
      }
    )

  }

  cycleChanged(cycle_id: number) {
    this.levelId = document.querySelector('#level') as HTMLSelectElement;
    this._studentService.payments_by_cycle(this.levelId.value, cycle_id).subscribe(
      response => {
        this.payments = response.payments;
        this.totalmount();
      },
      error => {
        console.log(error);
      }
    )
  }

}
