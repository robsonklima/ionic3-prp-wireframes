import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActivitiesPage } from '../activities/activities';
import { RecomendationsPage } from '../recomendations/recomendations';
import { RisksPage } from '../risks/risks';

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

  public onOpenRisks() {
    this.navCtrl.push(RisksPage);
  }

  public onOpenRecomendations() {
    this.navCtrl.push(RecomendationsPage);
  }
}
