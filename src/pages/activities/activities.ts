import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';

@Component({
  selector: 'activities-page',
  templateUrl: 'activities.html'
})
export class ActivitiesPage {

  constructor(
    public navCtrl: NavController
  ) {}

  public onOpenActivity() {
    this.navCtrl.push(ActivityPage);
  }
}
