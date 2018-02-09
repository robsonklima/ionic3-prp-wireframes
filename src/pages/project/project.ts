import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActivitiesPage } from '../activities/activities';
import { RecomendationsPage } from '../recomendations/recomendations';

@Component({
  selector: 'project-page',
  templateUrl: 'project.html'
})
export class ProjectPage {

  constructor(
    public navCtrl: NavController
  ) {}

  public onOpenActivities() {
    this.navCtrl.push(ActivitiesPage);
  }

  public onOpenRecomendations() {
    this.navCtrl.push(RecomendationsPage);
  }
}
