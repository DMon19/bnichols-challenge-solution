import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Basic declarations
  locationSearchString: String;
  locations = [{}]
  meetings = [{}];
  employees = [{}];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Observables pulling data through the data service into the component for consumption
    this.dataService.getEmployees().subscribe(employees => this.employees = employees)
    this.dataService.getMeetings().subscribe(meetings => this.meetings = meetings)
    this.dataService.getLocations().subscribe(locations => this.locations = locations)
  }

}
