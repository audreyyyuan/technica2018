import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as db from '../../js/dynamodbFuncs.js'
import { ResultsPage } from '../results/results'

/**
 * Generated class for the NextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-next',
  templateUrl: 'next.html',
})
export class NextPage {

  resultPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.log(db.scanTable);
    this.resultPage = ResultsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextPage');
    // console.log(db.scanTable());
  }

  logSubmit(event) {

  	// console.log(this.info);
  	// console.log(this.company);
  	// console.log(this.type);
  	// console.log(this.title);
  	// console.log(this.location)
  }

}
