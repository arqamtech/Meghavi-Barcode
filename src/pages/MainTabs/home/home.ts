import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  barcodeText: string="No Code";

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    public db: AngularFireDatabase,
    public navParams: NavParams,
  ) {
  }


  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.barcodeText = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
