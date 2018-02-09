import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecomendationsPage } from '../recomendations/recomendations';
import { RisksPage } from '../risks/risks';

@Component({
  selector: 'activity-page',
  templateUrl: 'activity.html'
})
export class ActivityPage {

  constructor(
    public navCtrl: NavController
  ) {}

  public onOpenRisks() {
    this.navCtrl.push(RisksPage);
  }

  public onOpenRecomendations() {
    this.navCtrl.push(RecomendationsPage);
  }
}
