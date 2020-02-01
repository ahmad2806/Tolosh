import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform, AlertController } from '@ionic/angular';

import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { Market } from '@ionic-native/market/ngx';
import { DataService } from '../services/data.service'
import { ListPageObject } from '../models/listPageObject.model';
import { SignPdfModel } from '../models/SignPdfModel';

@Component({
  selector: 'app-sign-pdf',
  templateUrl: './sign-pdf.page.html',
  styleUrls: ['./sign-pdf.page.scss'],
})
export class SignPdfPage implements OnInit{

  constructor(
    private platform: Platform, private document: DocumentViewer,
    private file: File, private transfer: FileTransfer,
    private fileOpener: FileOpener, private appAvailability: AppAvailability,
    private market: Market, private alertCtrl: AlertController, private dataService: DataService) { }

    ngOnInit(){
      this.dataService.getSign();
    }

  // private signObject = new ListPageObject( 
  //                         "Sign PDF", 
  //                         this.dataService.signPdf, 
  //                         this.m_alert, 
  //                         "../../assets/pdf_icon.png" 
  //                       )
  
  private PDF_READER: string = "com.adobe.reader";
  private APP_NOT_FOUND: string = `please download adobe acrobat to ensure the best results\ndownlaod and come back to the app\n`
  private OPEN_APP: string = `please open the pdf using adobe acrobat to ensure the best results\n`

  private getLocalPath() {
    return this.file.applicationDirectory + 'www/assets';
  }

  public m_alert() {
    alert("inside sign");
  }
  private setPath() {
    let path = null;
    if (this.platform.is("ios")) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.dataDirectory;
    }
    return path;
  }
  private tryOpenPdf(url: string) {
    this.appAvailability.check(this.PDF_READER).then(
      (yes: boolean) => {

        // this.alertCtrl.create().then((alert) => {
        //   alert.title = `open`
        //   alert.subHeader = `${this.OPEN_APP}`;
        //   alert.buttons = ['Ok']

        //   alert.present().then(() => {
        //     this.fileOpener.open(url, 'application/pdf');
        //   });

        // });

        alert(`${this.OPEN_APP}`);
        this.fileOpener.open(url, 'application/pdf');
      },
      (no: boolean) => {
        // this.alertCtrl.create().then((alert) => {
        //   alert.title = `open`
        //   alert.subHeader = `${this.APP_NOT_FOUND}`;
        //   alert.buttons = ['Ok']

        //   alert.present().then(() => {
        //     this.market.open(this.PDF_READER);
        //   });

        // });

        alert(`${this.APP_NOT_FOUND}`);
        this.market.open(this.PDF_READER);
      }
    );
  }
  private startDownload(download_from_url: string, path: string, file_name: string) {
    const transfer = this.transfer.create();
    transfer.download(download_from_url, `${path}${file_name}`).then(entry => {
      let url = entry.toURL();

      if (this.platform.is("ios")) {
        this.document.viewDocument(url, 'application/pdf', {});
      } else {
        this.tryOpenPdf(url)
      }
    });
  }


  private copyAndOpenPdf(file_name: string, file_path: string) {
    if (this.platform.is('android')) {
      this.file.copyFile(file_path, file_name, this.file.dataDirectory, `${file_name}`).then(result => {
        // this.fileOpener.open(result.nativeURL, 'application/pdf');
        this.tryOpenPdf(result.nativeURL)
        // alert(`${result.nativeURL}  \n${file_path}/${file_name}\n${this.file.dataDirectory}/${file_name}\n${result}`);
      });
    } else {
      const options: DocumentViewerOptions = {
        title: 'My PDF'
      }
      this.document.viewDocument(`${file_path}/${file_name}`, 'application/pdf', options);
    }
  }

  downloadAndOpenPdf() {
    const file_name = "tofs.pdf";
    // check internet connection
    let path = this.setPath();
    const url = 'https://www.docdroid.net/file/download/caC6W0b/vfs-hshtlmvt.pdf';
    // const url = 'https://www.docdroid.net/eSQ6iOX/nhli-mshmt-svdnim-dmbr-2018.pdf';

    // this.file.checkFile(path, file_name).then(_ => alert(`file already exist in \n ${path}`)).catch(err => this.downloadAndOpenFile(url, path, file_name));
    path = this.startDownload(url, path, file_name)

  }

  loadLocalPdf() {
    // const url = 'https://www.docdroid.net/caC6W0b/vfs-hshtlmvt.pdf';
    this.copyAndOpenPdf('test.pdf', this.getLocalPath());
  }
  loadFillablePDF() {
    this.copyAndOpenPdf('test_fill.pdf', this.getLocalPath());
  }
}
