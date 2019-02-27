import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { PackageDetailsPage } from '../../Packages/package-details/package-details';



@IonicPage()
@Component({
  selector: 'page-packages',
  templateUrl: 'packages.html',
})
export class PackagesPage {

  packages: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public db: AngularFireDatabase,
    public navParams: NavParams
  ) {
    this.getPackages();
  }

  getPackages() {
    this.db.list(`Packages`).snapshotChanges().subscribe(snapShot => {
      this.packages = [];
      snapShot.forEach(snap => {
        let temp: any = snap.payload.val();
        temp.key = snap.key;
        this.packages.push(temp);
      })
    })
  }



  viewPack(p) { this.navCtrl.push(PackageDetailsPage, { pack: p }); }

}
