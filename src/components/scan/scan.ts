import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { ResultComponent } from '../result/result';
import { ErrorComponent }   from '../error/error';

/**
 * Generated class for the ScanComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'scan',
  templateUrl: 'scan.html'
})
export class ScanComponent {

  constructor(
    private barcodeScanner: BarcodeScanner,
    private navCtrl: NavController) {

      this.barcodeScanner.scan({
        preferFrontCamera: false,
        torchOn: true,
        disableSuccessBeep: true,
        resultDisplayDuration: 0,
        orientation: 'portrait'
      }).then(barcodeData => {
        this.navCtrl.push(ResultComponent, {data: barcodeData});
      }, (err) => {
        this.navCtrl.push(ErrorComponent, {});
      });
  }


}
