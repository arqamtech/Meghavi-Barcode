import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentSuccessPage } from '../../Payment/payment-success/payment-success';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-package-details',
  templateUrl: 'package-details.html',
})
export class PackageDetailsPage {

  pack = this.navParams.get("pack");
  durMin: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.durMin = this.pack.Hours * 60;
    console.log(this.pack);

  }

  durRef = firebase.database().ref("User Data/Users").child(firebase.auth().currentUser.uid).child("Duration")

  buyNow() {
    this.durRef.once("value", itemSnap => {
      if (itemSnap.exists()) {
        let temp: number = itemSnap.val() + this.durMin;
        this.durRef.set(temp);
      } else {
        this.durRef.set(this.durMin)
      }
    }).then(() => {
      this.navCtrl.push(PaymentSuccessPage, { pack: this.pack });
    })

  }

}
