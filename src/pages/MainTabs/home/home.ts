import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import * as firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barcodeText: string = "No Code";

  totHours: number = 0;
  totMins: number = 0;

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    public db: AngularFireDatabase,
    public navParams: NavParams,
  ) {
    this.getHours();
  }

  getHours() {
    this.db.object(`User Data/Users/${firebase.auth().currentUser.uid}/Duration`).snapshotChanges().subscribe(snap => {

      let temp: any = snap.payload.val();
      // let hrs =  temp / 60;
      // let mins = temp % 60;
      if (temp) {
        // this.totHours = hrs;
        // this.totMins = mins;
        this.totMins = temp;
      }
    })
  }


  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.barcodeText = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
