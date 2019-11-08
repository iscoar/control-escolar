import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashiersRoutingModule } from './cashiers-routing.module';
import { ChargeComponent } from './components/charge/charge.component';


@NgModule({
  declarations: [ChargeComponent],
  imports: [
    CommonModule,
    CashiersRoutingModule
  ]
})
export class CashiersModule { }
