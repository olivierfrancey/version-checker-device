import { BrowserModule }    from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule }       from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp }            from './app.component';

import { StatusBar }        from '@ionic-native/status-bar';
import { SplashScreen }     from '@ionic-native/splash-screen';

import { BarcodeScanner }   from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';

import { ScanComponent }    from '../components/scan/scan';
import { ResultComponent }  from '../components/result/result';
import { ErrorComponent }   from '../components/error/error';
import { AboutComponent }   from '../components/about/about';
import { LoginComponent }   from '../components/login/login';

import { SessionService }   from '../services/session.service';
import { HttpService }      from '../services/http.service';
import { DocService }       from '../services/doc.service';

@NgModule({
  declarations: [
    MyApp,
    ScanComponent,
    ResultComponent,
    ErrorComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScanComponent,
    ResultComponent,
    ErrorComponent,
    AboutComponent,
    LoginComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    SessionService,
    HttpService,
    DocService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
