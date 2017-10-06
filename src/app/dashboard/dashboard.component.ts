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
  locations = [{}]
  meetings = [{}];
  employees = [{}];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEmployees().subscribe(employees => this.employees = employees)
    this.dataService.getMeetings().subscribe(meetings => this.meetings = meetings)
    this.dataService.getLocations().subscribe(locations => this.locations = locations)
  }

}
