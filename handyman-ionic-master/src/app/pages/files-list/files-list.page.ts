import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.page.html',
  styleUrls: ['./files-list.page.scss'],
})
export class FilesListPage implements OnInit {

  @Input() listObject: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
