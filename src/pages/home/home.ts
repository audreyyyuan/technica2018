import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NextPage } from '../next/next';
import { InputPage } from '../input/input';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nextPage : any;
  inputPage : any;
  data: any;

  constructor(public navCtrl: NavController) {
  	this.nextPage = NextPage;
  	this.inputPage = InputPage;
  }
}
