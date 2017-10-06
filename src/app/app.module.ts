import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { MeetingComponent } from './meeting/meeting.component';
import { EmployeeComponent } from './employee/employee.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataService } from './data.service';
import { SearchNamePipe } from './search-name.pipe';
import { SearchSubjectPipe } from './search-subject.pipe'

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'location', component: LocationComponent },
  { path: 'meeting', component: MeetingComponent },
  { path: 'employee', component: EmployeeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LocationComponent,
    MeetingComponent,
    EmployeeComponent,
    SidebarComponent,
    SearchNamePipe,
    SearchSubjectPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
