import { Component, OnInit } from '@angular/core';

import { AccountsService } from '../accounts.service';
import { Account } from '../account';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
	accounts: Account[];

	form1: NgForm;
	form2: Account;

	constructor(
  		public accountsService: AccountsService,
		public router: Router
	) { }

	getAccounts(): void {
		this.accounts = this.accountsService.getAccounts();
	}

	ngOnInit(): void {
		this.getAccounts();
	}

	registerAccount(accountForm: NgForm) {
		this.accounts = this.accountsService.registerAccount(accountForm.value.accountId, accountForm.value.name);
		return this.router.navigate(['/accounts']);
	}
}
