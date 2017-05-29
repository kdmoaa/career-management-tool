import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
  	public router: Router,
	public loginService: LoginService
  ) { }

  login(userForm: NgForm) {
  	if(this.loginService.login(userForm.value.userId, userForm.value.password)) {
		return this.router.navigate(['/admin']);
	}
	return this.router.navigate(['/login']);

  }
}

