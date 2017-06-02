import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent {

  constructor(
  	public router: Router,
	public loginService: LoginService
  ) { }

    isSignin(): boolean {
    	return this.loginService.isSignin();
	}

	listEmployee() {
		return this.router.navigate(['/employees']);
	}

	registerAccounts() {
		return this.router.navigate(['/accounts']);
	}

}
