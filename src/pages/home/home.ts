import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectsPage } from '../projects/projects';
import { ActivitiesPage } from '../activities/activities';
import { RisksPage } from '../risks/risks';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController
  ) {}

  public onOpenProjects() {
    this.navCtrl.push(ProjectsPage);
  }

  public onOpenActivities() {
    this.navCtrl.push(ActivitiesPage);
  }

  public onOpenRisks() {
    this.navCtrl.push(RisksPage);
  }
}
