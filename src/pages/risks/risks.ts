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
      contentA: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
      contentB: "Excepteur sint occaecat cupidatat non qui officia deserunt mollit"
    },
    {
      title: "Risk B",
      contentA: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur",
      contentB: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit"
    },
    {
      title: "Risk C",
      contentA: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit",
      contentB: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur"
    }
  ]

  constructor(
    public navCtrl: NavController
  ) {}

  public onOpenRisk(item: any) {
    this.navCtrl.push(RiskPage, { item: item });
  }
}
