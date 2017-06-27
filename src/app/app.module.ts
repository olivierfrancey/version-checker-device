import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar }    from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcodeScanner }   from '@ionic-native/barcode-scanner';
import { ScanComponent }    from '../components/scan/scan';
import { ResultComponent }  from '../components/result/result';
import { ErrorComponent }   from '../components/error/error';
import { AboutComponent }   from '../components/about/about';

@NgModule({
  declarations: [
    MyApp,
    ScanComponent,
    ResultComponent,
    ErrorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScanComponent,
    ResultComponent,
    ErrorComponent,
    AboutComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
