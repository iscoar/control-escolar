import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProvider } from './app.routing';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { CashiersModule } from './cashiers/cashiers.module';
import { WelcomeComponent } from './students/components/welcome/welcome.component';
//import { GroupAttendanceComponent } from './teachers/components/group-attendance/group-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    WelcomeComponent,
    //HttpClientModule
    //GroupAttendanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StudentsModule,
    TeachersModule,
    CashiersModule,
    routing,
    MDBBootstrapModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [
    appRoutingProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
