import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    cardInf: any[];

    data = [];

    constructor( private dataService: DataService, private router: Router ) { }

    ngOnInit() {
        this.getData();
        this.getCategories();
    }


    getData() {
        this.data = this.dataService.getData();
    }

    getCategories() {
        this.cardInf = this.dataService.getCategories();
    }
}
