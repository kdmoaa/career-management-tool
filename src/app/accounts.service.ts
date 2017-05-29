import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Account } from './account';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountsService {
	constructor() { }

	getAccounts(): Account[] {
		let accounts = [
			{ id: 101, name: 'user1' },
			{ id: 102, name: 'admin1' },
			{ id: 103, name: 'engineer1' }
		];
		return accounts;
	}
}

