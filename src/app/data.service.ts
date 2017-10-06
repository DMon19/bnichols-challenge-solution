import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

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
    return mockLocationsJson
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
    return mockMeetingsJson
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
    return mockEmployeesJson
  }

}
