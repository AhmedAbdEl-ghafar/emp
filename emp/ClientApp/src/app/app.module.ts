import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { FetchemployeeComponent } from './fetchemployee/fetchemployee.component';
import { HttpModule } from '@angular/http';
import { EmpserviceService } from './empservice.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,

    AddemployeeComponent,
    FetchemployeeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'fetch-employee', component: FetchemployeeComponent },
      { path: 'register-employee', component: AddemployeeComponent },
      { path: 'employee/edit/:id', component: AddemployeeComponent },
      { path: '**', redirectTo: 'home' }  
    ])
  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
