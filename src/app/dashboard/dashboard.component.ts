import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SearchNamePipe } from '../search-name.pipe';
import { SearchSubjectPipe } from '../search-subject.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  locationSearchString: String;

  locations = [{
    "id": "N/A",
    "name": "No Locations found",
    "timezone": "N/A"
  }]

  meetings = [{
    "datetime": "N/A",
    "subject": "No meetings found",
    "attendees": ["N/A"]
  }];

  employees = [{
    "id": "N/A",
    "name": "No employees found"
  }];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.locations = this.dataService.getLocations().Locations
    this.meetings = this.dataService.getMeetings().Meetings
    this.employees = this.dataService.getEmployees().Employees
  }

}
