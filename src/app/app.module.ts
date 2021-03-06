import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryCaseComponent } from './main/country-case/country-case.component';
import { HeaderComponent } from './header/header.component';
import { StateWiseComponent } from './main/state-wise/state-wise.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataChartComponent } from './main/data-chart/data-chart.component';
import { FooterComponent } from './footer/footer.component';
import { StateChartComponent } from './main/state-chart/state-chart.component';
import { OneChartComponent } from './main/state-chart/one-chart/one-chart.component';
import { DistrictDetailComponent } from './main/district-detail/district-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryCaseComponent,
    HeaderComponent,
    StateWiseComponent,
    DataChartComponent,
    FooterComponent,
    StateChartComponent,
    OneChartComponent,
    DistrictDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
