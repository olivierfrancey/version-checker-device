import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ScanComponent } from '../scan/scan';

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
    this.error_msg = navParams.get('error') || 'NO MESSAGE';
    console.log(this.error_msg);
  }

  newScan(): void {
    this.navController.setRoot(ScanComponent, {});
  }

}
