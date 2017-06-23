import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { ResultComponent } from '../result/result';
import { ErrorComponent }   from '../error/error';
import { TestScanComponent } from '../test-scan/test-scan';

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
        this.navCtrl.push(ResultComponent, {data: {text:'e7d2f170a55172bff23a73c932521e1ec8'}});
        //this.navCtrl.push(ErrorComponent, {err})
      });
  }


}
