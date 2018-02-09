import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecomendationsPage } from '../recomendations/recomendations';

@Component({
  selector: 'activity-page',
  templateUrl: 'activity.html'
})
export class ActivityPage {

  constructor(
    public navCtrl: NavController
  ) {}

  public onOpenRecomendations() {
    this.navCtrl.push(RecomendationsPage);
  }
}