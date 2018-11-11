import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts/ng2-charts';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  min = 105594;
  max = 116347;
  doughnutChartLabels:string[] = ['Female Pay ($)', 'Male Pay ($)'];
  chartData:number[] = [Math.floor(Math.random() * (max - min)) + min, Math.floor(Math.random() * (max - min)) + min];
  chartType:string = 'doughnut';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}