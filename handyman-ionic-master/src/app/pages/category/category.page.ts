import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss']
})
export class CategoryPage implements OnInit {
  data = [];
  item: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getData();
  }

  ionViewWillEnter() {
    const itemId = +this.route.snapshot.paramMap.get('id');
    this.item = this.dataService.getCategoyById(itemId);
  }

  getData() {
    this.data = this.dataService.getData();
  }
}
