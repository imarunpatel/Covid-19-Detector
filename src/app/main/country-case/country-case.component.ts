import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-country-case',
  templateUrl: './country-case.component.html',
  styleUrls: ['./country-case.component.scss']
})
export class CountryCaseComponent implements OnInit {

  indiaData;
  isLoading;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
      this.isLoading = true;
      setTimeout(() =>{
        this.getCountryWiseData();
      }, 5000)  
  }

  getCountryWiseData() {
    this.dataService.getCountryWiseData().subscribe(
      (data: any) => {
        this.indiaData = data;
        this.isLoading = false;
      }
      );
  }


}
