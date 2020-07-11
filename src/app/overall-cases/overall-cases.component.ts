import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { OverallCasesService } from './overall-cases.service';

@Component({
  selector: 'app-overall-cases',
  templateUrl: './overall-cases.component.html',
  styleUrls: ['./overall-cases.component.less']
})
export class OverallCasesComponent implements OnInit {
  tabResult: Observable<any>;

  constructor(private overall: OverallCasesService) {
    this.tabResult = this.overall.getService()
    console.log(Array.of(this.tabResult));
  }

  ngOnInit(): void {
  }

}
