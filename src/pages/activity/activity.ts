import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecomendationsPage } from '../recomendations/recomendations';
import { RisksPage } from '../risks/risks';
import {  } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'activity-page',
  templateUrl: 'activity.html'
})
export class ActivityPage {
  item: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    this.item = this.navParams.get('item');
  }

  public onOpenRisks() {
    this.navCtrl.push(RisksPage);
  }

  public onOpenRecomendations() {
    this.navCtrl.push(RecomendationsPage);
  }
}
