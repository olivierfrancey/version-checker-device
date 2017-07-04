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
          this.navCtrl.setRoot(ResultComponent, {data: {text: '219eef269bfc43e5f94b940ddec92a2935'}}); //-- debug
          //this.navCtrl.setRoot(ErrorComponent, {error: err});
        });
      });
    }

  }
