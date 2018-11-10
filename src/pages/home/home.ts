import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NextPage } from '../next/next';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nextPage : any;

  constructor(public navCtrl: NavController) {

  	this.nextPage = NextPage;
  }

}
