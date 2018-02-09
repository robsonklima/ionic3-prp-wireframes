import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';

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
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}

  public onAccept(item: any, i: number) {
    const alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you wish to accept this recomendation?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => { }
        },
        {
          text: 'Agree',
          handler: () => {
            this.exibirToast('Recomendation accepted').then(() => {
              this.items.splice(i, 1);
            });
          }
        }
      ]
    });

    alert.present();
  }

  public onDiscard(item: any, i: number) {
    const alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you wish to discard this recomendation?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => { }
        },
        {
          text: 'Agree',
          handler: () => {
            this.exibirToast('Recomendation rejected').then(() => {
              this.items.splice(i, 1);
            });
          }
        }
      ]
    });

    alert.present();
  }

  private exibirToast(mensagem: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const toast = this.toastCtrl.create({
        message: mensagem, duration: 3000, position: 'bottom'
      });

      resolve(toast.present());
    });
  }
}
