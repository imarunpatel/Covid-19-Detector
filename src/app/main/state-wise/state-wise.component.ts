import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.scss']
})
export class StateWiseComponent implements OnInit {
  panelOpenState = false;
  isLoading;

  constructor(private dataService: DataService) { }

  stateWiseData;

  ngOnInit(): void {
    this.isLoading = true;
    this.dataService.getIndiaStateWiseData().subscribe(
      (data) => {
        this.stateWiseData = data;
        this.isLoading = false;
      }
    )
  }

}
