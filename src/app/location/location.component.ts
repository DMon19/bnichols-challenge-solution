import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations = [{}]
  creatorVisible: boolean = false;
  newLocation = {
    "id": "",
    "name": "",
    "timezone": ""
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getLocations().subscribe(locations => this.locations = locations)
  }

  submitNewLocation(){
    // Adds an ID to the location before submission
    this.newLocation.id = (this.locations.length + 1).toString()
    this.dataService.addLocation(this.newLocation)
    // Resets the "new" location after submission
    this.newLocation = {
      "id": "",
      "name": "",
      "timezone": ""
    };
    // Closes the creator
    this.creatorVisible = false;
  }

}
