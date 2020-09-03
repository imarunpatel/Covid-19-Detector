import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-district-detail',
  templateUrl: './district-detail.component.html',
  styleUrls: ['./district-detail.component.scss']
})
export class DistrictDetailComponent implements OnInit {

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.getState();
    }, 2000)
  }

  allStates = [];
  allData;
  getState() {
    this.dataService.getIndiaStateWiseData().subscribe(
      (data: any) => {
        this.allData = data;
        data.forEach(item => {
          this.allStates.push(item.state);
        })
      }
    );
  };

  currentStateDistricts = [];
  currentState;
  onSelectState(state: string) {
    this.currentState= state;
    this.allData.forEach(item => {
      if (item.state == state) {
        let currentState = item.district;
        let elems = Object.keys(currentState);

        for(var i=0; i<elems.length; i++) {
          this.currentStateDistricts.push(elems[i])
        }

      }
    })
  }

  districtActive: number = 0;
  districtConfirmed: number = 0;
  districtDecreased: number = 0;
  districtRecovered: number = 0;
  onSelectDistrict(district: string) {

    this.allData.forEach(item => {
      let districts = item.district;
      for(var i in districts) {
        if (i == 'Ahmednagar') {
          this.districtActive = item.district[i].active;
          this.districtConfirmed = item.district[i].confirmed;
          this.districtDecreased = item.district[i].deceased;
          this.districtRecovered = item.district[i].recovered;
        }
      }
    })

  }

}
