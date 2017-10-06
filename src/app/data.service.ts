import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private db: AngularFirestore) { }

  // Retrieves from database

  getLocations() {
    return this.db.collection('locations').valueChanges()
  }

  getMeetings() {
    return this.db.collection('meetings').valueChanges()
  }

  getEmployees() {
    return this.db.collection('employees').valueChanges()
  }

  // Writes to database

  addLocation(newLocation) {
    this.db.collection('locations').add(newLocation);
  }

  addMeeting(newMeeting) {
    this.db.collection('meetings').add(newMeeting);
  }

}
