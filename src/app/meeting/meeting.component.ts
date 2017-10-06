import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  meetings = [{
    "datetime": "N/A",
    "subject": "No meetings found",
    "attendees": ["N/A"]
  }];
  
  newMeeting = {};

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.meetings = this.dataService.getMeetings().Meetings;
  }

}
