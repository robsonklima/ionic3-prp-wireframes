import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectsPage } from '../projects/projects';

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
}
