import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'risk-page',
  templateUrl: 'risk.html'
})
export class RiskPage {
  item: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    this.item = this.navParams.get('item');
  }
}
