import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-one-chart',
  templateUrl: './one-chart.component.html',
  styleUrls: ['./one-chart.component.scss']
})
export class OneChartComponent implements OnInit {

  @Input() DelhiData;
  @Input() allData;
  @Input() allDates;

  myChart;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.myChart = new Chart("myOneChart", {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });

  this.myChart.canvas.parentNode.style.width = '500px';

  this.addData();
  }

  addData() {
    this.myChart.data.labels = this.allDates;
    console.log('all', this.myChart.data.labels);

    this.myChart.update()
  }

}
