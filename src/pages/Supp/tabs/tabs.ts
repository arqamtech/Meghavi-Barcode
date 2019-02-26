import { Component } from '@angular/core';
import { HomePage } from '../../MainTabs/home/home';
import { ProfilePage } from '../../MainTabs/profile/profile';
import { PackagesPage } from '../../MainTabs/packages/packages';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PackagesPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
