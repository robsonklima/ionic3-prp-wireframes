import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectPage } from '../project/project';

@Component({
  selector: 'projects-page',
  templateUrl: 'projects.html'
})
export class ProjectsPage {
  items = [
    {
      title: "Project Alpha",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"
    },
    {
      title: "Project Beta",
      content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur"
    },
    {
      title: "Project Charlie",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit"
    }
  ]

  constructor(
    public navCtrl: NavController
  ) {}

  public onOpenProject(item: any) {
    this.navCtrl.push(ProjectPage, { item: item });
  }
}
