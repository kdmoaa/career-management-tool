import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Account } from './account';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountsService {
	accounts: Account[];
	
	constructor() { }

	getAccounts(): Account[] {
		this.accounts = [
			{ accountId: 101, name: 'user1' },
			{ accountId: 102, name: 'admin1' },
			{ accountId: 103, name: 'engineer1' }
		];
		return this.accounts;
	}

	registerAccount(accountId: number, name: string): Account[] {
		var account = new Account();
		account.accountId = accountId;
		account.name = name;
		this.accounts.push(account);
		return this.accounts;
	}
}
