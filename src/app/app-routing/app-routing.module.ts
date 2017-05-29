import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '../admin/admin.component';
import { EmployeeComponent } from '../employee/employee.component';
import { AccountsComponent } from '../accounts/accounts.component';

const routes: Routes = [
	{path: '', redirectTo: '/login', pathMatch: 'full' },
	{path: 'login', component: LoginComponent },
	{path: 'admin', component: AdminComponent },
	{path: 'employees', component: EmployeeComponent },
	{path: 'accounts', component: AccountsComponent }
];

@NgModule({
  imports: [
    CommonModule,
	RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
