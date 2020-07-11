import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
// import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/https';
// import { HttpErrorResponse } from '@angular/common/https';
import { SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.less']
})
export class ChartsComponent {

  constructor(private httpService: HttpClient) {

  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Active', 'Recovered', 'Deceased'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];




  // ngOnInit() {
  //   this.httpService.get('https://api.covid19india.org/states_daily.json', { responseType: 'json' }).subscribe(
  //     states_daily.date => {
  //     this.pieChartData = states_daily as any[],
  //   },
  //     (err: HttpErrorResponse) => {
  //       console.log(err.message);
  //     }
  //   );
  // }
  // onChartClick(event) {
  //   console.log(event);
  // }

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75] },
    // states_daily: []

  ];

  lineChartLabels: Label[] = ['Active', 'Recovered', 'Deceased'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';


}


