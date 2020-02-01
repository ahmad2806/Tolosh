import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.page.html',
  styleUrls: ['./files-list.page.scss'],
})
export class FilesListPage implements OnInit {

  @Input() listObject: any;
  @Input() name: string;
  @Input() date: Date;
  @Input() url: Date;
  constructor(private dataService: DataService) { 
    console.log("inside")
  }

  ngOnInit() {
  }

}
