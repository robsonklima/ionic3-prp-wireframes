import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';

@Component({
  selector: 'activities-page',
  templateUrl: 'activities.html'
})
export class ActivitiesPage {
  items = [
    {
      title: "Activity 1",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"
    },
    {
      title: "Activity 2",
      content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur"
    },
    {
      title: "Activity 3",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit"
    }
  ]

  constructor(
    public navCtrl: NavController
  ) {}

  public onOpenActivity(item: any) {
    this.navCtrl.push(ActivityPage, { item: item });
  }
}
