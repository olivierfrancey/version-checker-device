import { Component, OnInit } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

import { DataService } from '../../services/data.service';

/**
 * Generated class for the TestScanComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'test-scan',
  templateUrl: 'test-scan.html'
})

export class TestScanComponent{

  text:any;
  text1:any;

  constructor(
    private navController: NavController,
    private navParams: NavParams) {
      this.text = navParams.get('data').text;
  }

}
