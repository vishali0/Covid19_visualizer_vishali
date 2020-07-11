import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { OverallCasesComponent } from './overall-cases/overall-cases.component'
  ;
import { StatewiseCasesComponent } from './statewise-cases/statewise-cases.component'
  ;
import { ChartsComponent } from './charts/charts.component'
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent
    ,
    OverallCasesComponent
    ,
    StatewiseCasesComponent,
    ChartsComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { };