import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'recomendations-page',
  templateUrl: 'recomendations.html'
})
export class RecomendationsPage {
  items = [
    {
      title: "Risk A",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      percentageOfOccurrences: "35%"
    },
    {
      title: "Risk B",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
      percentageOfOccurrences: "20%"
    },
    {
      title: "Risk C",
      content: "Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
      percentageOfOccurrences: "20%"
    }
  ]

  constructor(
    public navCtrl: NavController
  ) {}
}
