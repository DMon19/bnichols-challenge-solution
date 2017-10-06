import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { MeetingComponent } from './meeting/meeting.component';
import { EmployeeComponent } from './employee/employee.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataService } from './core/data.service';
import { SearchNamePipe } from './shared/search-name.pipe';
import { SearchSubjectPipe } from './shared/search-subject.pipe';

// Declares routes for components in the application
const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'location', component: LocationComponent },
  { path: 'meeting', component: MeetingComponent },
  { path: 'employee', component: EmployeeComponent },
];

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAS8TKDvr0XEZ4-GCEqw5suw_fXxCp5VqA",
    authDomain: "bnichols-challenge-api.firebaseapp.com",
    databaseURL: "https://bnichols-challenge-api.firebaseio.com",
    projectId: "bnichols-challenge-api",
    storageBucket: "bnichols-challenge-api.appspot.com",
    messagingSenderId: "871682579438"
  };

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
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
