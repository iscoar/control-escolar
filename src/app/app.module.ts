import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProvider } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { CashiersModule } from './cashiers/cashiers.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    StudentsModule,
    TeachersModule,
    CashiersModule,
    routing
  ],
  providers: [
    appRoutingProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
