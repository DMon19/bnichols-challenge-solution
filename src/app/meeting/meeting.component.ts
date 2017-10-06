import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  meetings = [{}];
  employees = [{}];
  date:String;
  time:String;
  newMeeting = {
    "datetime": "",
    "subject": "",
    "attendees": []
  };

  creatorVisible: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMeetings().subscribe(meetings => this.meetings = meetings)
    this.dataService.getEmployees().subscribe(employees => this.employees = employees)
  }

  submitNewMeeting(){
    this.newMeeting.datetime = this.date + " " + this.time
    this.dataService.addMeeting(this.newMeeting)
    this.newMeeting = {
      "datetime": "",
      "subject": "",
      "attendees": []
    };
    this.creatorVisible = false;
  }

}
