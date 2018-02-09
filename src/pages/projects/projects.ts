import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectPage } from '../project/project';

@Component({
  selector: 'projects-page',
  templateUrl: 'projects.html'
})
export class ProjectsPage {

  constructor(
    public navCtrl: NavController
  ) {}

  public onOpenProject() {
    this.navCtrl.push(ProjectPage);
  }
}
