import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
	signin: boolean;

	login(userId: string, password: string): boolean {
		if ( userId == "user" && password == "pass" ) {
			this.signin = true;
			return true;
		}

		return false;
	}

	isSignin(): boolean {
		return this.signin;
	}

  constructor() { }

}
