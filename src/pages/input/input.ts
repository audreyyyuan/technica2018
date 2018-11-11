import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

	info = {}
	// company : string;
	// type : string;
	// location : string;
	// title : string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }

  logSubmit(event) {

  	console.log(this.info);
  	// console.log(this.company);
  	// console.log(this.type);
  	// console.log(this.title);
  	// console.log(this.location)
  }

}
