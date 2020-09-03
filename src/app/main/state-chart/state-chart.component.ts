import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-state-chart',
  templateUrl: './state-chart.component.html',
  styleUrls: ['./state-chart.component.scss']
})
export class StateChartComponent implements OnInit {

  parentMessage = "message parent";
  myChart;
  dates = [];
  allData;
  DelhiData = {
    dates: [],
    confirmedCasesIndian: [],
    confirmedCasesForeign: [],
    discharged: [],
    deaths: [],
    totalConfirmed: []
  };

  Haryana = {
    dates: [],
    confirmedCasesIndian: [],
    confirmedCasesForeign: [],
    discharged: [],
    deaths: [],
    totalConfirmed: []
  };

  Karnataka = {
    dates: [],
    confirmedCasesIndian: [],
    confirmedCasesForeign: [],
    discharged: [],
    deaths: [],
    totalConfirmed: []
  };
  Kerala = {dates: [],confirmedCasesIndian: [],confirmedCasesForeign: [],discharged: [],deaths: [],totalConfirmed: []};
  Maharashtra = {dates: [],confirmedCasesIndian: [],confirmedCasesForeign: [],discharged: [],deaths: [],totalConfirmed: []};
  Punjab = {dates: [],confirmedCasesIndian: [],confirmedCasesForeign: [],discharged: [],deaths: [],totalConfirmed: []};
  Rajasthan = {dates: [],confirmedCasesIndian: [],confirmedCasesForeign: [],discharged: [],deaths: [],totalConfirmed: []};
  TamilNadu = {dates: [],confirmedCasesIndian: [],confirmedCasesForeign: [],discharged: [],deaths: [],totalConfirmed: []};
  Telangana = {dates: [],confirmedCasesIndian: [],confirmedCasesForeign: [],discharged: [],deaths: [],totalConfirmed: []};
  JammuKashmir = {dates: [],confirmedCasesIndian: [],confirmedCasesForeign: [],discharged: [],deaths: [],totalConfirmed: []};
  Ladakh = {dates: [],confirmedCasesIndian: [],confirmedCasesForeign: [],discharged: [],deaths: [],totalConfirmed: []};
  UttarPradesh = {dates: [],confirmedCasesIndian: [],confirmedCasesForeign: [],discharged: [],deaths: [],totalConfirmed: []};
  
  


  allDates = [];
  locations = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getAllStateStats().subscribe(
      (data: any) => {
        this.allData = data;
        data.allData.data[0].regional.forEach(item => {
          this.locations.push(item.loc);
        })

        data.allData['data'].forEach(newItem => {
          
          this.DelhiData.dates.push(newItem.day);
          this.allDates.push(newItem.day);

          newItem.regional.forEach(state => {

            if(state.loc == 'Delhi') {
              this.DelhiData.confirmedCasesIndian.push(state.confirmedCasesIndian);
              this.DelhiData.confirmedCasesForeign.push(state.confirmedCasesForeign);
              this.DelhiData.discharged.push(state.discharged);
              this.DelhiData.deaths.push(state.deaths);
              this.DelhiData.totalConfirmed.push(state.totalConfirmed);
            }
            if(state.loc == 'Haryana') {
              this.Haryana.confirmedCasesIndian.push(state.confirmedCasesIndian);
              this.Haryana.confirmedCasesForeign.push(state.confirmedCasesForeign);
              this.Haryana.discharged.push(state.discharged);
              this.Haryana.deaths.push(state.deaths);
              this.Haryana.totalConfirmed.push(state.totalConfirmed);
            }
            if(state.loc == 'Karnataka') {
              this.Karnataka.confirmedCasesIndian.push(state.confirmedCasesIndian);
              this.Karnataka.confirmedCasesForeign.push(state.confirmedCasesForeign);
              this.Karnataka.discharged.push(state.discharged);
              this.Karnataka.deaths.push(state.deaths);
              this.Karnataka.totalConfirmed.push(state.totalConfirmed);
            }
            if(state.loc == 'Kerala') {
              this.Kerala.confirmedCasesIndian.push(state.confirmedCasesIndian);
              this.Kerala.confirmedCasesForeign.push(state.confirmedCasesForeign);
              this.Kerala.discharged.push(state.discharged);
              this.Kerala.deaths.push(state.deaths);
              this.Kerala.totalConfirmed.push(state.totalConfirmed);
            }
            if(state.loc == 'Maharashtra') {
              this.Maharashtra.confirmedCasesIndian.push(state.confirmedCasesIndian);
              this.Maharashtra.confirmedCasesForeign.push(state.confirmedCasesForeign);
              this.Maharashtra.discharged.push(state.discharged);
              this.Maharashtra.deaths.push(state.deaths);
              this.Maharashtra.totalConfirmed.push(state.totalConfirmed);
            }
            if(state.loc == 'Punjab') {
              this.Punjab.confirmedCasesIndian.push(state.confirmedCasesIndian);
              this.Punjab.confirmedCasesForeign.push(state.confirmedCasesForeign);
              this.Punjab.discharged.push(state.discharged);
              this.Punjab.deaths.push(state.deaths);
              this.Punjab.totalConfirmed.push(state.totalConfirmed);
            }
            if(state.loc == 'Rajasthan') {
              this.Rajasthan.confirmedCasesIndian.push(state.confirmedCasesIndian);
              this.Rajasthan.confirmedCasesForeign.push(state.confirmedCasesForeign);
              this.Rajasthan.discharged.push(state.discharged);
              this.Rajasthan.deaths.push(state.deaths);
              this.Rajasthan.totalConfirmed.push(state.totalConfirmed);
            }
            if(state.loc == 'Tamil Nadu') {
              this.TamilNadu.confirmedCasesIndian.push(state.confirmedCasesIndian);
              this.TamilNadu.confirmedCasesForeign.push(state.confirmedCasesForeign);
              this.TamilNadu.discharged.push(state.discharged);
              this.TamilNadu.deaths.push(state.deaths);
              this.TamilNadu.totalConfirmed.push(state.totalConfirmed);
            }
            if(state.loc == 'Telengana') {
              this.Telangana.confirmedCasesIndian.push(state.confirmedCasesIndian);
              this.Telangana.confirmedCasesForeign.push(state.confirmedCasesForeign);
              this.Telangana.discharged.push(state.discharged);
              this.Telangana.deaths.push(state.deaths);
              this.Telangana.totalConfirmed.push(state.totalConfirmed);
            }
            if(state.loc == 'Jammu and Kashmir') {
              this.JammuKashmir.confirmedCasesIndian.push(state.confirmedCasesIndian);
              this.JammuKashmir.confirmedCasesForeign.push(state.confirmedCasesForeign);
              this.JammuKashmir.discharged.push(state.discharged);
              this.JammuKashmir.deaths.push(state.deaths);
              this.JammuKashmir.totalConfirmed.push(state.totalConfirmed);
            }
            if(state.loc == 'Ladakh') {
              this.Ladakh.confirmedCasesIndian.push(state.confirmedCasesIndian);
              this.Ladakh.confirmedCasesForeign.push(state.confirmedCasesForeign);
              this.Ladakh.discharged.push(state.discharged);
              this.Ladakh.deaths.push(state.deaths);
              this.Ladakh.totalConfirmed.push(state.totalConfirmed);
            }
            if(state.loc == 'Uttar Pradesh') {
              this.UttarPradesh.confirmedCasesIndian.push(state.confirmedCasesIndian);
              this.UttarPradesh.confirmedCasesForeign.push(state.confirmedCasesForeign);
              this.UttarPradesh.discharged.push(state.discharged);
              this.UttarPradesh.deaths.push(state.deaths);
              this.UttarPradesh.totalConfirmed.push(state.totalConfirmed);
            }
          })
        })

          this.dates = data.dates;
          this.addData('Delhi');
        }
      );

    this.myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: [],
          datasets: [
            {
              label: 'Confirmed',
              data: [],
              backgroundColor: [
                  'rgba(246, 74, 65, 0.97)',
                  
              ],
              borderColor: [
                  'rgba(171, 15, 7, 0.97)',
              ],
              borderWidth: 1,
              
          },
            {
              label: 'Deaths',
              data: [],
              backgroundColor: [
                  'rgba(45, 188, 52, 0.97)',
                  
              ],
              borderColor: [
                'rgba(10, 142, 17, 0.97)',
              ],
              borderWidth: 2,
          },
            {
              label: 'Discharged',
              data: [],
              backgroundColor: [
                  'rgba(29, 18, 231, 0.97)',
                  
              ],
              borderColor: [
                'rgba(31, 23, 186, 0.97)',
              ],
              borderWidth: 2,
              
          },
        ]
      },
      options: {
          maintainAspectRation: false,
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

  }


  addData(state: string) {
    if(state == 'Delhi') {
      this.myChart.data.labels = this.DelhiData.dates.splice(1, 30);
      this.myChart.data.datasets[0].data = this.DelhiData.confirmedCasesIndian.splice(1, 30);
      this.myChart.data.datasets[1].data = this.DelhiData.deaths.splice(1, 30);
      this.myChart.data.datasets[2].data = this.DelhiData.discharged.splice(1, 30);
      this.myChart.update()
    }
    if (state == 'Haryana') {
      this.myChart.data.labels = this.allDates.splice(1, 30);
      this.myChart.data.datasets[0].data = this.Haryana.confirmedCasesIndian.splice(1, 30);
      this.myChart.data.datasets[1].data = this.Haryana.deaths.splice(1, 30);
      this.myChart.data.datasets[2].data =  this.Haryana.discharged.splice(1, 30);
      this.myChart.update()
    }
    if (state == 'Karnataka') {
      this.myChart.data.labels = this.allDates.splice(1, 30);
      this.myChart.data.datasets[0].data = this.Karnataka.confirmedCasesIndian.splice(1, 30);
      this.myChart.data.datasets[1].data = this.Karnataka.deaths.splice(1, 30);
      this.myChart.data.datasets[2].data = this.Karnataka.discharged.splice(1, 30);
      this.myChart.update()
    }
    if (state == 'Kerala') {
      this.myChart.data.labels = this.allDates.splice(1, 30);
      this.myChart.data.datasets[0].data = this.Kerala.confirmedCasesIndian.splice(1, 30);
      this.myChart.data.datasets[1].data = this.Kerala.deaths.splice(1, 30);
      this.myChart.data.datasets[2].data = this.Kerala.discharged.splice(1, 30);
      this.myChart.update()
    }
    if (state == 'Maharashtra') {
      this.myChart.data.labels = this.allDates.splice(1, 30);
      this.myChart.data.datasets[0].data = this.Maharashtra.confirmedCasesIndian.splice(1, 30);
      this.myChart.data.datasets[1].data = this.Maharashtra.deaths.splice(1, 30);
      this.myChart.data.datasets[2].data = this.Maharashtra.discharged.splice(1, 30);
      this.myChart.update()
    }
    if (state == 'Punjab') {
      this.myChart.data.labels = this.allDates.splice(1, 30);
      this.myChart.data.datasets[0].data = this.Punjab.confirmedCasesIndian.splice(1, 30);
      this.myChart.data.datasets[1].data = this.Punjab.deaths.splice(1, 30);
      this.myChart.data.datasets[2].data = this.Punjab.discharged.splice(1, 30);
      this.myChart.update()
    }
    if (state == 'Rajasthan') {
      this.myChart.data.labels = this.allDates.splice(1, 30);
      this.myChart.data.datasets[0].data = this.Rajasthan.confirmedCasesIndian.splice(1, 30);
      this.myChart.data.datasets[1].data = this.Rajasthan.deaths.splice(1, 30);
      this.myChart.data.datasets[2].data = this.Rajasthan.discharged.splice(1, 30);
      this.myChart.update()
    }
    if (state == 'Tamil Nadu') {
      this.myChart.data.labels = this.allDates.splice(1, 30);
      this.myChart.data.datasets[0].data = this.TamilNadu.confirmedCasesIndian.splice(1, 30);
      this.myChart.data.datasets[1].data = this.TamilNadu.deaths.splice(1, 30);
      this.myChart.data.datasets[2].data = this.TamilNadu.discharged.splice(1, 30);
      this.myChart.update()
    }
    if (state == 'Telengana') {
      this.myChart.data.labels = this.allDates.splice(1, 30);
      this.myChart.data.datasets[0].data = this.Telangana.confirmedCasesIndian.splice(1, 30);
      this.myChart.data.datasets[1].data = this.Telangana.deaths.splice(1, 30);
      this.myChart.data.datasets[2].data = this.Telangana.discharged.splice(1, 30);
      this.myChart.update()
    }
    if (state == 'Jammu and Kashmir') {
      this.myChart.data.labels = this.allDates.splice(1, 30);
      this.myChart.data.datasets[0].data = this.JammuKashmir.confirmedCasesIndian.splice(1, 30);
      this.myChart.data.datasets[1].data = this.JammuKashmir.deaths.splice(1, 30);
      this.myChart.data.datasets[2].data = this.JammuKashmir.discharged.splice(1, 30);
      this.myChart.update()
    }
    if (state == 'Ladakh') {
      this.myChart.data.labels = this.allDates.splice(1, 30);
      this.myChart.data.datasets[0].data = this.Ladakh.confirmedCasesIndian.splice(1, 30);
      this.myChart.data.datasets[1].data = this.Ladakh.deaths.splice(1, 30);
      this.myChart.data.datasets[2].data = this.Ladakh.discharged.splice(1, 30);
      this.myChart.update()
    }
    if (state == 'Uttar Pradesh') {
      this.myChart.data.labels = this.allDates.splice(1, 30);
      this.myChart.data.datasets[0].data = this.UttarPradesh.confirmedCasesIndian.splice(1, 30);
      this.myChart.data.datasets[1].data = this.UttarPradesh.deaths.splice(1, 30);
      this.myChart.data.datasets[2].data = this.UttarPradesh.discharged.splice(1, 30);
      this.myChart.update()
    }


  }


  onSelectLocation(state: string) {
    // console.log('state clicked', state);
    // let newState: string= state;
    // this.allData.allData['data'].forEach(newItem => {
    //   newItem.regional.forEach(state => {
    //     // console.log(state);
    //     if(state.loc == newState) {
    //       console.log('state', state.loc);
    //     }
    //   })
    // })

      // this.dates = data.dates;
      this.addData(state); 
    // this.addData(state);
  }

}