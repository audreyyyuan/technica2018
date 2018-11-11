import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results/results';


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


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.resultPage = ResultsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }

  logSubmit(event) {

    if(this.info.gender !== "f" || this.info.gender !== "m") {
      alert("gender is required");
    }

  	console.log(this.info);
  }

}
