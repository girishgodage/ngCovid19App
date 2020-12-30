import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryComponent } from './pages/country/country.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: {title: 'COVID 19 - Stats Tracker | Dashboard'} },
  { path: 'cases/:type', component: CountryListComponent, data: {title: 'COVID 19 - Stats Tracker | Report by Country'} },
  { path: 'cases', component: CountryListComponent, data: {title: 'COVID 19 - Stats Tracker | Report by Country'} },
  { path: 'country/:countryName', component: CountryComponent, data: {title: 'COVID 19 - Stats Tracker | Country'} },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
