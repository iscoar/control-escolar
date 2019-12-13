import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.sass']
})
export class NoticesComponent implements OnInit {
  public loading: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
