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
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore",
      percentageOfOccurrences: "35%"
    },
    {
      title: "Risk B",
      content: "Sed ut perspiciatis unde omnis iste natus error sit laudantium, totam rem aperiam",
      percentageOfOccurrences: "20%"
    },
    {
      title: "Risk C",
      content: "Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
      percentageOfOccurrences: "28%"
    }
  ]

  constructor(
    public navCtrl: NavController
  ) {}
}
