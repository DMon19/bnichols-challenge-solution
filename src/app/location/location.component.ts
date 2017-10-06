import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations = [{
    "id": "N/A",
    "name": "No Locations found",
    "timezone": "N/A"
  }]

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.locations = this.dataService.getLocations().Locations;
  }

}
