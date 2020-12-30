import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainComponent } from './common/main/main.component';
import { LoadingComponent } from './common/loading/loading.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryComponent } from './pages/country/country.component';
import { AreaChartComponent } from './pages/country/area-chart/area-chart.component';
import { StackedChartComponent } from './pages/country/stacked-chart/stacked-chart.component';
import { TableComponent } from './pages/country-list/table/table.component';
import { NewsComponent } from './pages/dashboard/news/news.component';
import { SummaryComponent } from './pages/dashboard/summary/summary.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoadingComponent,
    DashboardComponent,
    CountryListComponent,
    CountryComponent,
    AreaChartComponent,
    StackedChartComponent,
    TableComponent,
    NewsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
