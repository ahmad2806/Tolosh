import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform, AlertController } from '@ionic/angular';

import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { Market } from '@ionic-native/market/ngx';


import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sign-pdf',
  templateUrl: './sign-pdf.page.html',
  styleUrls: ['./sign-pdf.page.scss'],
})
export class SignPdfPage implements OnInit{

  constructor(private dataService: DataService) { }

    ngOnInit(){
      // this.dataService.fillData();
    }

  public signPdfOnClick(url: string) {
    console.log(url);
    // this.dataService.loadFillablePDF();
    this.dataService.downloadAndOpenPdf();
  }
  
}
