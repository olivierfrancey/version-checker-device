import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AboutComponent } from './about';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutComponentModule {}
