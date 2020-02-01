import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    cardInf: any[];
    user: null;
    data = [];

    constructor( private authService: AuthService, private dataService: DataService, private router: Router ) { }

    ngOnInit() {
        this.getData();
        this.getCategories();
        this.getUser();
    }

    getUser() {
        this.user = this.authService.user;
    }
    getData() {
        this.data = this.dataService.getData();
    }

    getCategories() {
        this.cardInf = this.dataService.getCategories();
    }
    checkIfAdded(item) {
        if(this.authService.user.role != "a")
            return item.role =="user"
        return true;
    }
}
