import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ScanComponent } from '../scan/scan';
import { ErrorComponent } from '../error/error';

import { DocService } from '../../services/doc.service';

/**
 * Generated class for the ResultComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'result',
  templateUrl: 'result.html',
  providers: [DocService]
})
export class ResultComponent implements OnInit{

  doc:any;
  msg:string;
  id:any;
  load:boolean;

  constructor(
    private docService: DocService,
    private navController: NavController,
    private navParams: NavParams) {
      this.id = navParams.get('data').text;
      console.log('id received:'+this.id)
     }

  ngOnInit(): void {
    this.load = true;
    this.getDoc();
  }

  getDoc(): void {
    this.docService.getDoc(this.id)
      .then(data => {
        this.doc = data;
        console.log('doc2:'+this.doc);
        this.load = false;
      }).catch(error => {
        this.navController.setRoot(ErrorComponent, {error: error});
      });
  }

  newScan(): void {
    this.navController.setRoot(ScanComponent, {});
  }

}
