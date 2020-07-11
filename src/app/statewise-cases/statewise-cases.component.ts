import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
// import {statewise} from '/statewise.service';
import { StatewiseService } from './statewise.service';

@Component({
  selector: 'app-statewise-cases',
  templateUrl: './statewise-cases.component.html',
  styleUrls: ['./statewise-cases.component.less']
})
export class StatewiseCasesComponent implements OnInit {
  tabResult: Observable<any>;

  constructor(private tab: StatewiseService) {
    this.tabResult = this.tab.getService()
    console.log(this.tabResult);
  }

  ngOnInit(): void {
    // this.tab.getService().subscribe((response) => {
    //   this.tabResult = response.;
    // },
    //   (error) => console.log(error)
    // )
  }

}
