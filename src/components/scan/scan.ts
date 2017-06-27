import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { ResultComponent } from '../result/result';
import { ErrorComponent }   from '../error/error';

@Component({
  selector: 'scan',
  templateUrl: 'scan.html'
})
export class ScanComponent {

  constructor(
    private barcodeScanner: BarcodeScanner,
    private navCtrl: NavController,
    public platform: Platform ) {

      this.platform.ready().then(() => {
        this.barcodeScanner.scan({
          preferFrontCamera: false,
          torchOn: true,
          disableSuccessBeep: true,
          resultDisplayDuration: 0,
          orientation: 'portrait'
        }).then(barcodeData => {
          this.navCtrl.setRoot(ResultComponent, {data: barcodeData});
        }, (err) => {
          //this.navCtrl.setRoot(ResultComponent, {data: {text: '9955cae38f33d5acdb53d6211b9c7df87c'}}); //-- debug
          this.navCtrl.setRoot(ErrorComponent, {error: err});
        });
      });
    }

  }
