import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
    'x-rapidapi-key': 'a3fb9cd835mshd43aae70dc7ce96p1f3c1fjsn624c3761ca4b'
  })

  getCountryWiseData() {
    let IndiaData = {};
    const api = 'https://corona-virus-world-and-india-data.p.rapidapi.com/api';
    return this.http.get(api, {headers: this.headers}).pipe(
      map(item => {
        let raw = item['countries_stat']
        raw.forEach(oneCountry => {
          if (oneCountry.country_name == 'India') {
            IndiaData = oneCountry;
          }
        });
        return IndiaData; 
      })
    )
  }

  getIndiaStateWiseData() {
    let raw;
    const api = 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india';
    return this.http.get(api, {headers: this.headers}).pipe(
      map(item => {
        raw = item['state_wise'];
        return Object.values(raw);
      })
    )
    
  }

  timeLineData() {
    const api = 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india_timeline';
    return this.http.get(api, {headers: this.headers}).pipe(
      map(item => {
        return Object.values(item);
      })
    )
  }


}
