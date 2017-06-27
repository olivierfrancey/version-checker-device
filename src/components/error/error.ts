import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ScanComponent } from '../scan/scan';

/**
 * Generated class for the ErrorComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'error',
  templateUrl: 'error.html'
})
export class ErrorComponent {

  error_msg: any;

  constructor(
    private navController: NavController,
    private navParams: NavParams
  ) {
    this.error_msg = navParams.get('error').toUpperCase();
  }

  newScan(): void {
    this.navController.setRoot(ScanComponent, {});
  }

}
