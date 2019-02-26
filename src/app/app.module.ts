import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomePage } from '../pages/MainTabs/home/home';
import { TabsPage } from '../pages/Supp/tabs/tabs';
import { ProfilePage } from '../pages/MainTabs/profile/profile';
import { LoginPage } from '../pages/Auths/login/login';
import { LoginSplashPage } from '../pages/Auths/login-splash/login-splash';
import { SignUpPage } from '../pages/Auths/sign-up/sign-up';
import { LoaderPage } from '../pages/Supp/loader/loader';
import { PackagesPage } from '../pages/MainTabs/packages/packages';
import { PackageDetailsPage } from '../pages/Packages/package-details/package-details';

import { NgxQRCodeModule } from 'ngx-qrcode2';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

export const firebaseCred = {
  apiKey: "AIzaSyAPEiwwtgKyLiHBx_l3n43vXWGZ6paiuQM",
  authDomain: "meghavi-c8c04.firebaseapp.com",
  databaseURL: "https://meghavi-c8c04.firebaseio.com",
  projectId: "meghavi-c8c04",
  storageBucket: "meghavi-c8c04.appspot.com",
  messagingSenderId: "1008057720957"
};
firebase.initializeApp(firebaseCred);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ProfilePage,
    LoginPage,
    LoginSplashPage,
    SignUpPage,
    LoaderPage,
    PackagesPage,
    PackageDetailsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false
    }),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ProfilePage,
    LoginPage,
    LoginSplashPage,
    SignUpPage,
    LoaderPage,
    PackagesPage,
    PackageDetailsPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner,
  ]
})
export class AppModule { }
