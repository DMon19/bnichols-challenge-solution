import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees = [{
    "id": "N/A",
    "name": "No employees found"
  }];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.employees = this.dataService.getEmployees().Employees
  }

}
