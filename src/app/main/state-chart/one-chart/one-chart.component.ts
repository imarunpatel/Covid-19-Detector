import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-one-chart',
  templateUrl: './one-chart.component.html',
  styleUrls: ['./one-chart.component.scss']
})
export class OneChartComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
}
