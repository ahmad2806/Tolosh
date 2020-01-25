import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.scss'],
})
export class CardCategoriesComponent implements OnInit {

    @Input() avatar: string;
    @Input() name: string;
    @Input() reviews: number;
    @Input() distance: string;
    @Input() info: string;

      constructor(private router: Router) { }

    ngOnInit() {}
    

}
