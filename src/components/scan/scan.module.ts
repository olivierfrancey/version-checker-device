import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ScanComponent } from './scan';

@NgModule({
  declarations: [
    ScanComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ScanComponent
  ]
})
export class ScanComponentModule {}
