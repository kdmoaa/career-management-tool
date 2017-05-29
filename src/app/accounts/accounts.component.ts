import { Component, OnInit } from '@angular/core';

import { AccountsService } from '../accounts.service';
import { Account } from '../account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
	accounts: Account[];

	constructor(
  		public accountsService: AccountsService
	) { }

	getAccounts(): void {
		this.accounts = this.accountsService.getAccounts();
	}

	ngOnInit(): void {
		this.getAccounts();
	}

}
