import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../Supp/tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-payment-success',
  templateUrl: 'payment-success.html',
})
export class PaymentSuccessPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }


  continue() { this.navCtrl.setRoot(TabsPage); }

}
