import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateWiseComponent } from './main/state-wise/state-wise.component';
import { CountryCaseComponent } from './main/country-case/country-case.component';


const routes: Routes = [
  { path: '', component: CountryCaseComponent },
  { path: 'state-wise', component: StateWiseComponent },
  { path: '**', component: CountryCaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
