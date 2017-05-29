import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login.service';
import { AccountsService } from './accounts.service';

import { AdminComponent } from './admin/admin.component';
import { CommonComponent } from './common/common.component';
import { EmployeeComponent } from './employee/employee.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CommonComponent,
    EmployeeComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	MaterialModule,
    HttpModule
  ],
  providers: [
  	LoginService,
	AccountsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
