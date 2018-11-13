import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the InputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input',
  templateUrl: 'input.html',
})
export class InputPage {

  resultPage : any;

	info = {};

  titleOptions = {
    title: 'Position Title',
    subtitle: 'choose the type of position above'
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Confirm',
      subTitle: 'By clicking OK, your anonymous submission will be sent to reviewers for audit. Thank you for supporting the #talkpay movement.',
      buttons: ['OK']
    });
    alert.present();
  }

}
