import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tlosh',
  templateUrl: './tlosh.page.html',
  styleUrls: ['./tlosh.page.scss'],
})
export class TloshPage implements OnInit {

  constructor(private dataService: DataService) { }

  public tloshOnClick() {
    alert("inside tlosh");
  }
  ngOnInit() {
  }

}
