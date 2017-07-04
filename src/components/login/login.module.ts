import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginComponent } from './login';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginComponentModule {}
