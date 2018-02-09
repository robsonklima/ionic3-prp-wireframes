import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectPage } from '../project/project';
import { RiskPage } from '../risk/risk';

@Component({
  selector: 'risks-page',
  templateUrl: 'risks.html'
})
export class RisksPage {
  items = [
    {
      title: "Risk A",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"
    },
    {
      title: "Risk B",
      content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur"
    },
    {
      title: "Risk C",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit"
    }
  ]

  constructor(
    public navCtrl: NavController
  ) {}

  public onOpenRisk() {
    this.navCtrl.push(RiskPage);
  }
}
