import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private db:AngularFirestore) { }

  getLocations(){
    var mockLocationsJson = {
      "Locations": [
        {
          "id" : "1",
          "name" : "Morris Plains, NJ",
          "timezone" : "EST"
      },
        {
          "id" : "2",
          "name" : "Phoenix, AZ",
          "timezone" : "MST"
      },
        {
          "id" : "3",
          "name" : "Charlotte, NC",
          "timezone" : "EST"
      }
      ]
    }
    // return mockLocationsJson
    return this.db.collection('locations').valueChanges()
  }

  getMeetings(){
    var mockMeetingsJson = {
      "Meetings": [
        {
          "datetime" : "January 3, 2017 11:00am",
          "subject" : "Sprint Planning",
          "attendees" : ["Brent Nichols", "Liz Jones"]
      },
        {
          "datetime" : "January 8, 2017 08:30am",
          "subject" : "Backlog Grooming",
          "attendees" : ["Kevin Bellomo", "Brent Nichols"]
      }
      ]
    }
    // return mockMeetingsJson
    return this.db.collection('meetings').valueChanges()
  }

  getEmployees(){
    var mockEmployeesJson = {
      "Employees": [
        {
          "id" : "1",
          "name" : "Brent Nichols",
          "gender" : "male"
      },
        {
          "id" : "2",
          "name" : "Kevin Bellomo",
          "gender" : "male"
      },
        {
          "id" : "3",
          "name" : "Liz Jones",
          "gender" : "female"
      }
      ]
    }
    // return mockEmployeesJson
    return this.db.collection('employees').valueChanges()
  }

  addLocation(newLocation){
    this.db.collection('locations').add(newLocation);
  }
  addMeeting(newMeeting){
    this.db.collection('meetings').add(newMeeting);
  }

}
