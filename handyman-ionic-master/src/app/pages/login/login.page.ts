import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	email: 			string;
	password: 		string;

	constructor( 	private router: 		Router, 
					private utilService: 	UtilsService ) { }

    ngOnInit() {
		this.email 		= "";
		this.password 	= "";
    }

    login(){

		this.router.navigateByUrl("/home");
		
    }

}
